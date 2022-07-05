// @ts-ignore
import chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp = require('chai-http');
import Task from '../database/models/Task';
import app from '..';
import { Response } from 'superagent';

const { expect } = chai;
chai.use(chaiHttp);

const fakeDate = new Date(Date.now());

const fakeTaskList = [
  {
    id: 1,
    title: 'Tarefa 1',
    description: 'Descrição da tarefa 1',
    status: 'pendente',
    createdAt: fakeDate,
  },
  {
    id: 2,
    title: 'Tarefa 2',
    description: 'Descrição da tarefa 2',
    status: 'pendente',
    createdAt: fakeDate,
  },
];


describe('Teste da rota GET /tasks', () => {
  let ApiResponse: Response;

  before(async () => {
    sinon
      .stub(Task, 'findAll')
      .resolves(fakeTaskList as Task[]);
  });

  after(()=>{
    (Task.findAll as sinon.SinonStub).restore();
  })

  it('A API Deve retornar a lista completa de tarefas corretamente', async () => {
    ApiResponse = await chai.request(app).get('/tasks');
    
    console.log(typeof ApiResponse.body[0].createdAt);

    expect(ApiResponse.status).to.be.equal(200);
    expect(ApiResponse.body).to.be.an('array');
    expect(ApiResponse.body).to.have.lengthOf(2);
    expect(ApiResponse.body[0]).to.be.an('object');
    expect(ApiResponse.body[0].id).to.be.equal(1);
    expect(ApiResponse.body[1]).to.be.an('object');
    expect(ApiResponse.body[1].id).to.be.equal(2);
  });
});