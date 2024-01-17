/* eslint-disable max-lines */
/* eslint-disable id-length */

import { JsonResult1, JsonResultManagementCourseResponseDTO } from "./data-contracts";
import requestInstance from "./instance";

type RequestConfig = Omit<any, "url" | "method">;

export const API = {
  /**
   * @description - 详细信息
   * @name GET /managementCourse/detail/{id}
   * @summary 详细信息
   * @tags p1/admin/课程管理表
   * @response `200` `JsonResultManagementCourseResponseDTO` 成功
   */
  "/managementCourse/detail/{id}_GET": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/managementCourse/detail/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultManagementCourseResponseDTO>,
  /**
   * @description - 物理删除（删除数据库数据）
   * @name DELETE /managementCourse/delete/{id}
   * @summary 物理删除（删除数据库数据）
   * @tags p1/admin/课程管理表
   * @response `200` `JsonResult1` 成功
   */
  "/managementCourse/delete/{id}_DELETE": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/managementCourse/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResult1>,
  /**
   * @description - 逻辑删除
   * @name DELETE /managementCourse/del/{id}
   * @summary 逻辑删除
   * @tags p1/admin/课程管理表
   * @response `200` `JsonResult1` 成功
   */
  "/managementCourse/del/{id}_DELETE": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/managementCourse/del/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResult1>,
  /**
   * @description - 逻辑删除恢复
   * @name DELETE /managementCourse/recover/{id}
   * @summary 逻辑删除恢复
   * @tags p1/admin/课程管理表
   * @response `200` `JsonResult1` 成功
   */
  "/managementCourse/recover/{id}_DELETE": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/managementCourse/recover/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResult1>
};
