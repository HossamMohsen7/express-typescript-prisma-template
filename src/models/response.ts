import { Response } from "express";

import { BaseResponse, ErrorResponse } from "./api";
import Exception from "./error";

class ServerResponse {
  static success<T>(res: Response<BaseResponse<T>>, data: T) {
    return res.json({ success: true, data });
  }

  static error(res: Response<ErrorResponse>, error: Exception) {
    return res
      .status(error.statusCode)
      .json({ success: false, message: error.message });
  }
}

export default ServerResponse;
