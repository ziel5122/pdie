import deepFreeze from 'deep-freeze';

import { image, images, previewImageUrl } from './image-store';

describe('image-store test suite', () => {
  describe('image reducer tests', () => {
    test('image reducer updates name without mutating state', () => {
      const beforeImage = {
        name: '',
      };
      const afterImage = {
        name: 'test',
      };

      deepFreeze(beforeImage);

      expect(image(beforeImage, {
        name: 'test',
        type: 'SET_IMAGE_FILE_NAME',
      })).toEqual(afterImage);
    });

    test('image reducer updates height without mutating state', () => {
      const beforeImage = {
        height: 0,
      };
      const afterImage = {
        height: 123,
      };

      deepFreeze(beforeImage);

      expect(image(beforeImage, {
        height: 123,
        type: 'SET_IMAGE_HEIGHT',
      })).toEqual(afterImage);
    });

    test('image reducer updates width without mutating state', () => {
      const beforeImage = {
        width: 0,
      };
      const afterImage = {
        width: 123,
      };

      deepFreeze(beforeImage);

      expect(image(beforeImage, {
        width: 123,
        type: 'SET_IMAGE_WIDTH',
      })).toEqual(afterImage);
    });
  });
});
