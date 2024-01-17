/* eslint-disable max-lines */
/* eslint-disable id-length */

import { JsonResultListQaPO, QaQuestionGetParams } from "./data-contracts";
import requestInstance from "./instance";

type RequestConfig = Omit<any, "url" | "method">;

export const API = {
  /**
   * @description - 问答
   * @name GET /qa/question
   * @summary 问答
   * @tags p1/wechat/-  qa 管理表
   * @response `200` `JsonResultListQaPO` 成功
   */
  "/qa/question_GET": (query: QaQuestionGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/qa/question`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListQaPO>
};
