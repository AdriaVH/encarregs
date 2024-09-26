import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mysql',
  url: 'mysql://avnadmin:AVNS_2tV1BQALphazSSGezFA@mysql-2c3ba78d-adriavargashernandez-d6ae.d.aivencloud.com:16885/defaultdb?ssl-mode=REQUIRED/encarregs',
  host: 'mysql-2c3ba78d-adriavargashernandez-d6ae.d.aivencloud.com',
  port: 16885,
  user: 'avnadmin',
  password: 'AVNS_2tV1BQALphazSSGezFAAVNS_2tV1BQALphazSSGezFA',
  database: 'encarregs'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
