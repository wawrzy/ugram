import { ConnectedClientsModel, UserModel } from "../models";
import logger from "../common/logger";
import { notifyClientHelper } from "../middlewares/notifyClient";

const connectClient = async (socketId, data) => {
  //TODO use $push for more atomic and efficient code
  try {
    const accessToken = data.accessToken;
    const userModel = await UserModel.findOne({ accessToken });
    const userId = userModel.id;

    const connectedClientsModel = await findOneOrCreate(
      ConnectedClientsModel,
      userId
    );
    const connectedInstances = [
      ...connectedClientsModel.connectedInstances,
      socketId
    ];
    await ConnectedClientsModel.findOneAndUpdate(
      { userId: userId },
      { connectedInstances: connectedInstances }
    );
    await notifyClientHelper(userId);
    logger.info(
      `${userId} is connected with ${connectedInstances.length} instance(s)`
    );
  } catch (error) {
    logger.error(error);
  }
};

const disconnectClient = async socketId => {
  try {
    const connectedClientsModel = await ConnectedClientsModel.findOne({
      connectedInstances: socketId
    });

    const connectedInstances = connectedClientsModel.connectedInstances;
    removeClient(connectedInstances, socketId);
    const userId = connectedClientsModel.userId;

    await ConnectedClientsModel.findOneAndUpdate(
      { userId: userId },
      { connectedInstances: connectedInstances }
    );

    logger.info(
      `${userId} is connected with ${connectedInstances.length} instance(s)`
    );
  } catch (error) {
    logger.error(error);
  }
};

const removeClient = (connectedInstances, socketId) => {
  const idx = connectedInstances.indexOf(socketId);
  if (idx != -1) {
    connectedInstances.splice(idx, 1);
  }
};

const findOneOrCreate = async (model, id) => {
  let modelFound;
  try {
    modelFound = await model.findOne({ userId: id });
    if (modelFound === null) {
      modelFound = await model.create({ userId: id });
    }
  } catch (error) {
    logger.error(error);
  }
  return modelFound;
};

export { connectClient, disconnectClient };
