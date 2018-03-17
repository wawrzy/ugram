import * as HomeServices from "./home";
import * as UploadServices from "./upload";

const parseEntry = (data) => {
		let jsonData = data.toJSON();
		delete jsonData._id;
		delete jsonData.__v;

		return jsonData;
};

export { HomeServices, UploadServices, parseEntry };
