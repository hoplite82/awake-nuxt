import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generateMemberApi = () => {
  const contentDir = `${rootDir}/content/members`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/members.json`
  const metaFile = `${apiDir}/members-meta.json`
  const pages = 3
  const doneMessage = `{totalNumber} members generated in members API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/members`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateMemberApi
