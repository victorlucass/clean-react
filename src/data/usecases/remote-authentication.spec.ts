import { HttpClientSpy } from '../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    // sut => system under test, que é o objeto que estamos testando na vez.
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
