import { getIdeaByIdeaId, getIdeasByUserId } from '../common/services/db/ideas';
import { connectIdeas, connectIdeas2 } from '../common/utils/firebase/firebase.util';


// test("Get an idea by idea id", async () => {
//   // expect(getIdeaByIdeaId(121)).toBe(-1);
//   let res = await getIdeasByUserId();
//   console.log("result", res);
//   expect(res).toBe(-1);
//   // return getIdeaByIdeaId().then(data => {
//   //   expect(data).toBe(-1);
//   // });
// });



// test("Get idea by idea_id", async () => {
//   const ideaId = "h8WAnPAHfhSgYlObbb6C";
//   let res = await getIdeaByIdeaId(ideaId);
//   console.log("result_2", res);
//   expect(res).not.toBe(null);
// });

test("Get ideas by user_id", async () => {
  const userId = "WC5VhHcQYJ4G96OzuoGw";
  let res = await getIdeasByUserId(userId);
  console.log("result_1", res);
  expect(res).not.toBe(null);
});

// test("Test 111", async () => {
//   let res = await connectIdeas();
//   console.log("result 111", res);
//   expect(res).toBe(0);
// });

// test("Test 222", async () => {
//   let res = await connectIdeas2();
//   console.log("result 222", res);
//   expect(res).toBe(0);
// });