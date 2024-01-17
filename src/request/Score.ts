/* eslint-disable max-lines */
/* eslint-disable id-length */

import {
  JsonResult1,
  JsonResultPagedResultScoreEntity,
  JsonResultScoreEntity,
  ScorePageGetParams,
  ScoreRequestDTO
} from "./data-contracts";
import requestInstance from "./instance";

type RequestConfig = Omit<any, "url" | "method">;

export const API = {
  /**
   * @description - 分页查询
   * @name GET /score/page
   * @summary 分页查询
   * @tags p1/wechat/-  Controller
   * @response `200` `JsonResultPagedResultScoreEntity` 成功
   */
  "/score/page_GET": (query: ScorePageGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/score/page`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultScoreEntity>,
  /**
   * @description - 详细信息
   * @name GET /score/detail/{id}
   * @summary 详细信息
   * @tags p1/wechat/-  Controller
   * @response `200` `JsonResultScoreEntity` 成功
   */
  "/score/detail/{id}_GET": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/score/detail/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultScoreEntity>,
  /**
   * @description - 保存对象
   * @name POST /score/save
   * @summary 保存对象
   * @tags p1/wechat/-  Controller
   * @response `200` `JsonResult1` 成功
   */
  "/score/save_POST": (body: ScoreRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/score/save`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResult1>,
  /**
   * @description - 修改对象
   * @name PUT /score/update
   * @summary 修改对象
   * @tags p1/wechat/-  Controller
   * @response `200` `JsonResult1` 成功
   */
  "/score/update_PUT": (body: ScoreRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/score/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResult1>,
  /**
   * @description - 物理删除（删除数据库数据）
   * @name DELETE /score/delete/{id}
   * @summary 物理删除（删除数据库数据）
   * @tags p1/wechat/-  Controller
   * @response `200` `JsonResult1` 成功
   */
  "/score/delete/{id}_DELETE": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/score/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResult1>,
  /**
   * @description - 签到送积分
   * @name DELETE /score/signInAndGetPoints
   * @summary 签到送积分
   * @tags p1/wechat/-  Controller
   * @response `200` `JsonResult1` 成功
   */
  "/score/signInAndGetPoints_DELETE": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/score/signInAndGetPoints`,
      method: "DELETE",
      params,
      ...options
    }) as unknown as Promise<JsonResult1>
};
