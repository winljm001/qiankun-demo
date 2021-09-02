import { gql } from '@apollo/client'

/**
 * 获取产地树
 */
export const getPlaceTree = gql`
  query getPlaceTree {
    selectPlaceTree {
      placeName
      placeId
      placePid
    }
  }
`
/**
 * 新增/修改产地
 */
export const modifyPlaceTree = gql`
  mutation modifyPlace($placeInput: PlaceInput) {
    modifyPlace(placeInput: $placeInput)
  }
`
/**
 * 删除产地
 */
export const deletePlace = gql`
  mutation deletePlace($placeId: Int!) {
    deletePlace(placeId: $placeId)
  }
`
