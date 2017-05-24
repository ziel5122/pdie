import deepFreeze from 'deep-freeze';

import { image, images, previewImageUrl } from './image-store';

describe('image-store test suite', () => {
  describe('image reducer tests', () => {
    test('update file name without mutating state', () => {
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

    test('update height without mutating state', () => {
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

    test('update width without mutating state', () => {
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

  describe('images reducer tests', () => {
    const beforeImages = [
      { name: 'image1' },
      { name: 'image2' },
    ];

    test('append image without mutating state', () => {
      const afterImages = [
        { name: 'image1' },
        { name: 'image2' },
        { name: 'image3' },
      ];

      deepFreeze(beforeImages);

      expect(images(beforeImages, {
        image: { name: 'image3' },
        type: 'APPEND_IMAGE',
      })).toEqual(afterImages);
    });

    test('prepend image without mutating state', () => {
      const afterImages = [
        { name: 'image3' },
        { name: 'image1' },
        { name: 'image2' },
      ];

      deepFreeze(beforeImages);

      expect(images(beforeImages, {
        image: { name: 'image3' },
        type: 'PREPEND_IMAGE',
      })).toEqual(afterImages);
    });

    test('set images without mutating state', () => {
      const afterImages = beforeImages;
      const beforeImages = [];

      deepFreeze(beforeImages);

      expect(images(beforeImages, {
        images: afterImages,
        type: 'SET_IMAGES',
      })).toEqual(afterImages);
    });
  });
});
