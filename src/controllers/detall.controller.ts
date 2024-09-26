import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {DetallDeLEncarreg} from '../models';
import {DetallDeLEncarregRepository} from '../repositories';

export class DetallController {
  constructor(
    @repository(DetallDeLEncarregRepository)
    public detallDeLEncarregRepository : DetallDeLEncarregRepository,
  ) {}

  @post('/detalls')
  @response(200, {
    description: 'DetallDeLEncarreg model instance',
    content: {'application/json': {schema: getModelSchemaRef(DetallDeLEncarreg)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetallDeLEncarreg, {
            title: 'NewDetallDeLEncarreg',
            exclude: ['id'],
          }),
        },
      },
    })
    detallDeLEncarreg: Omit<DetallDeLEncarreg, 'id'>,
  ): Promise<DetallDeLEncarreg> {
    return this.detallDeLEncarregRepository.create(detallDeLEncarreg);
  }

  @get('/detalls/count')
  @response(200, {
    description: 'DetallDeLEncarreg model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DetallDeLEncarreg) where?: Where<DetallDeLEncarreg>,
  ): Promise<Count> {
    return this.detallDeLEncarregRepository.count(where);
  }

  @get('/detalls')
  @response(200, {
    description: 'Array of DetallDeLEncarreg model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DetallDeLEncarreg, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DetallDeLEncarreg) filter?: Filter<DetallDeLEncarreg>,
  ): Promise<DetallDeLEncarreg[]> {
    return this.detallDeLEncarregRepository.find(filter);
  }

  @patch('/detalls')
  @response(200, {
    description: 'DetallDeLEncarreg PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetallDeLEncarreg, {partial: true}),
        },
      },
    })
    detallDeLEncarreg: DetallDeLEncarreg,
    @param.where(DetallDeLEncarreg) where?: Where<DetallDeLEncarreg>,
  ): Promise<Count> {
    return this.detallDeLEncarregRepository.updateAll(detallDeLEncarreg, where);
  }

  @get('/detalls/{id}')
  @response(200, {
    description: 'DetallDeLEncarreg model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DetallDeLEncarreg, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DetallDeLEncarreg, {exclude: 'where'}) filter?: FilterExcludingWhere<DetallDeLEncarreg>
  ): Promise<DetallDeLEncarreg> {
    return this.detallDeLEncarregRepository.findById(id, filter);
  }

  @patch('/detalls/{id}')
  @response(204, {
    description: 'DetallDeLEncarreg PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetallDeLEncarreg, {partial: true}),
        },
      },
    })
    detallDeLEncarreg: DetallDeLEncarreg,
  ): Promise<void> {
    await this.detallDeLEncarregRepository.updateById(id, detallDeLEncarreg);
  }

  @put('/detalls/{id}')
  @response(204, {
    description: 'DetallDeLEncarreg PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() detallDeLEncarreg: DetallDeLEncarreg,
  ): Promise<void> {
    await this.detallDeLEncarregRepository.replaceById(id, detallDeLEncarreg);
  }

  @del('/detalls/{id}')
  @response(204, {
    description: 'DetallDeLEncarreg DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.detallDeLEncarregRepository.deleteById(id);
  }
}
