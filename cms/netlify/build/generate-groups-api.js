import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generateGroupsApi = () => {
  const contentDir = `${rootDir}/content/groups`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/groups.json`
  const metaFile = `${apiDir}/groups-meta.json`
  const pages = siteConfig.groups.perPage
  const doneMessage = `{totalNumber} Groups generated in groups API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/groups`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateGroupsApi
