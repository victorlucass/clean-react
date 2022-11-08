import { internet } from 'faker'
import { HttpClientSpy } from '../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpClientSpy
};
const makeSut = (url: string = internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  // sut => system under test, que é o objeto que estamos testando na vez.
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
