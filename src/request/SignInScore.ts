/* eslint-disable max-lines */
/* eslint-disable id-length */

import { JsonResult1, JsonResultListScoreFlowEntity } from "./data-contracts";
import requestInstance from "./instance";

type RequestConfig = Omit<any, "url" | "method">;

export const API = {
  /**
   * @description - 每日签到
   * @name GET /signInScore/signIn
   * @summary 每日签到
   * @tags p1/wechat/积分签到表
   * @response `200` `JsonResult1` 成功
   */
  "/signInScore/signIn_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/signInScore/signIn`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResult1>,
  /**
   * @description - 当月签到
   * @name GET /signInScore/monthlySignIn
   * @summary 当月签到
   * @tags p1/wechat/积分签到表
   * @response `200` `JsonResultListScoreFlowEntity` 成功
   */
  "/signInScore/monthlySignIn_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/signInScore/monthlySignIn`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListScoreFlowEntity>
};
