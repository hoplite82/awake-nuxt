
import { createPagination, createMeta, createAll } from './helper'
import siteConfig from '../../../config/_siteConfig'
const rootDir = `${__dirname}/../../..`
const generateTerminApi = () => {
  const contentDir = `${rootDir}/content/termine`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/termine.json`
  const metaFile = `${apiDir}/termine-meta.json`
  const pages = siteConfig.termine.perPage
  const doneMessage = `{totalNumber} termine generated in termine API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/termine`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateTerminApi