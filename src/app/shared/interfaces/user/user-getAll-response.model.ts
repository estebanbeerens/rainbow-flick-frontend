import { IUserDetailResponse } from 'src/app/shared/interfaces/user/user-detail-response.model';

export interface IUserGetAllResponse {
    results : IUserDetailResponse[],
}

