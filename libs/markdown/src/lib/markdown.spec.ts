import { getParsedFileContentBySlug } from './markdown';

describe('getParsedFileContentBySlug', () => {
  it('should work', () => {
    expect(
      getParsedFileContentBySlug(
        'dynamic-routing',
        './../../../../_articles/dynamic-routing.md'
      )
    ).toHaveBeenCalled();
  });
});
