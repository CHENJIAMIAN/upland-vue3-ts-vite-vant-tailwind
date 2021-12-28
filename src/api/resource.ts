import { ResourceOption } from '@/entities/resource';
import request from '@/utils/request';

// POST
// ​/api​/plot
// 创建地块
export const plotPOST = (data: any) => {
    return request<ResourceOption>({
        url: '/plot',
        method: `POST`,
        data,
    });
};
// GET
// ​/api​/plot
// 获取所有地块(分页/模糊)
export const plotGET = (data = { currentPage: 1, pageSize: 100 }) => {
    return request<ResourceOption>({
        url: '/plot',
        method: `GET`,
        data,
    });
};
// DELETE
// ​/api​/plot​/{id}
// 删除所选地块
export const plotDELETE = (id: string) => {
    return request<ResourceOption>({
        url: `plot/${id}`,
        method: `DELETE`,
    });
};

// GET
// ​/api​/plot​/{id}
// 获取单个地块
export const plotGETbyId = (id: string) => {
    return request<ResourceOption>({
        url: `/plot/${id}`,
        method: `GET`,
    });
};

export const uploadSingle = (data) => {
    return request<ResourceOption>({
        url: '/upload/single',
        method: `POST`,
        data,
    });
};
// POST
// ​/api​/plot
// 创建地块
export const plotPUT = (data: any) => {
    return request<ResourceOption>({
        url: `plot/${data._id}`,
        method: `PUT`,
        data,
    });
};
