import generatePostApi from '../build/generate-post-api'
import generateCategoryApi from '../build/generate-category-api'
import copyStaticToDist from '../build/copy-static-to-dist'
import generateMemberApi from '../build/generate-member-api'
import generateTerminApi from "../build/generate-termine-api";
import generateGroupsApi from "../build/generate-groups-api";
export default () => {
  generatePostApi()
  generateCategoryApi()
  copyStaticToDist()
  generateMemberApi()
  generateTerminApi()
  generateGroupsApi()
}
