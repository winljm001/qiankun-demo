import {
  PageUserManageQueryVariables,
  PageUserManageQuery,
  ListOrgGroupOptionQueryVariables,
  ListOrgGroupOptionQuery,
  UserManageQuery,
  CreateUserMangeMutationVariables,
} from '@/graphql/operations/base-data/__generated__/staff-management'

// 员工列表参数接口类型
export type StaffManagementVariables = PageUserManageQueryVariables['input']
// 员工列表返回值接口类型
export type StaffManagementQuery = PageUserManageQuery['pageUserManage']
// 组织架构名称下拉框返回值接口类型
export type OrgGroupListQuery = ListOrgGroupOptionQuery['listOrgGroupOption']
// 组织架构名称下拉框参数接口类型
export type OrgGroupVariables = ListOrgGroupOptionQueryVariables
// 编辑form表单返回值接口类型
export type InitialValuesQuery = UserManageQuery['userManage']
// 新增员工参数接口类型
export type CreateStaffVariables = CreateUserMangeMutationVariables['input']
