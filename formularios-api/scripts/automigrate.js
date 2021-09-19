const path = require('path')
const app = require('../server/server')

const main = module.exports = async () => {
  // await app.dataSources.cba1_desa.autoupdate()
  // await app.migrateSchema({
  //   models: [ '', 'Order' ]
  // });
  // await app.models.T_PYC_INSCRIPCION.create({'USR_CIDI':'Hi'})
  // console.log(await app.models.T_PYC_INSCRIPCION.find({},{include: 'T_PYC_SOLICITANTE'}))
  await app.dataSources.cba1_desa.autoupdate()

  console.log('Performed automigration.')
}

if (require.main === module) {
  main().then(console.log).catch(console.log)
}