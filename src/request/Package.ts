/* eslint-disable max-lines */
/* eslint-disable id-length */

import {
  JsonResult1,
  JsonResultPackageEchoDto,
  JsonResultPackageResponseDTO,
  PackageDto,
  StatusInputDto
} from "./data-contracts";
import requestInstance from "./instance";

type RequestConfig = Omit<any, "url" | "method">;

export const API = {
  /**
   * @description 详细信息
   * @name GET /package/detail/{id}
   * @summary 详细信息
   * @tags p1/admin/套餐列表
   * @response `200` `JsonResultPackageResponseDTO` 成功
   */
  "/package/detail/{id}_GET": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/package/detail/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultPackageResponseDTO>,
  /**
   * @description - 回显套餐
   * @name GET /package/echo/{id}
   * @summary 回显套餐数据
   * @tags p1/admin/套餐列表
   * @response `200` `JsonResultPackageEchoDto` 成功
   */
  "/package/echo/{id}_GET": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/package/echo/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultPackageEchoDto>,
  /**
   * @description - 保存对象
   * @name POST /package/save
   * @summary 保存对象
   * @tags p1/admin/套餐列表
   * @response `200` `JsonResult1` 成功
   */
  "/package/save_POST": (body: PackageDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/package/save`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResult1>,
  /**
   * @description - 修改对象
   * @name PUT /package/update
   * @summary 修改对象
   * @tags p1/admin/套餐列表
   * @response `200` `JsonResult1` 成功
   */
  "/package/update_PUT": (body: PackageDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/package/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResult1>,
  /**
   * @description - 物理删除（删除数据库数据）
   * @name DELETE /package/delete/{id}
   * @summary 物理删除（删除数据库数据）
   * @tags p1/admin/套餐列表
   * @response `200` `JsonResult1` 成功
   */
  "/package/delete/{id}_DELETE": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/package/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResult1>,
  /**
   * @description - 逻辑删除
   * @name DELETE /package/del/{id}
   * @summary 逻辑删除
   * @tags p1/admin/套餐列表
   * @response `200` `JsonResult1` 成功
   */
  "/package/del/{id}_DELETE": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/package/del/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResult1>,
  /**
   * @description - 逻辑删除恢复
   * @name DELETE /package/recover/{id}
   * @summary 逻辑删除恢复
   * @tags p1/admin/套餐列表
   * @response `200` `JsonResult1` 成功
   */
  "/package/recover/{id}_DELETE": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/package/recover/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResult1>,
  /**
   * @description - 修改状态
   * @name PUT /package/updateStatus
   * @summary 修改状态
   * @tags p1/admin/套餐列表
   * @response `200` `JsonResult1` 成功
   */
  "/package/updateStatus_PUT": (body: StatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/package/updateStatus`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResult1>
};
