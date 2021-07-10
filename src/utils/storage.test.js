import { storage } from './storage';

describe('local storage testing', () => {
  it('should save successfully', () => {
    const state = {
      videoId: 'test',
      videoTitle: 'test',
      videoDescription: 'test',
      etag: 'test',
    };
    const json = JSON.stringify(state);
    storage.set('videoLocationState', json);
    expect(JSON.parse(json));
  });
});