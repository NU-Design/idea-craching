import { getIdeaByIdeaId } from '../common/services/db/ideas';

test("Get an idea by idea id", () => {
  expect(getIdeaByIdeaId(121)).toBe(null);
});
