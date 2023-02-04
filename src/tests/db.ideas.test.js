import { getIdeaByIdeaId, getIdeasByUserId, getIdeasByAncestorId, addIdea } from '../common/services/db/ideas';
import { connectIdeas, connectIdeas2 } from '../common/utils/firebase/firebase.util';
import { Timestamp, FieldValue } from 'firebase/firestore';

// test("Add an idea", async () => {
//   const data = {
//     // timestamp: FieldValue.serverTimestamp(),
//     title: "Test Title",
//     brief: "This is a brief oh",
//     media: {
//       name: "media name", 
//       type: "image",
//       source: {
//         url: "NOT A URL",
//       }
//     },
//     details: "ideaDetail_id FAKE",
//     parent: "PARENT", 
//     ancestor: "ANCESTOR_ID", 
//     likes: 8,
//     reposts: 1
//   };

//   const res = await addIdea(null, data);
//   console.log("add_result", res);
//   expect(res).not.toBe(null);
// });

// test("Get idea by idea_id", async () => {
//   const ideaId = "h8WAnPAHfhSgYlObbb6C";
//   let res = await getIdeaByIdeaId(ideaId);
//   console.log("result_1", res);
//   expect(res).not.toBe(null);
// });

// test("Get ideas by user_id", async () => {
//   const userId = "WC5VhHcQYJ4G96OzuoGw";
//   let res = await getIdeasByUserId(userId);
//   console.log("result_2", res);
//   expect(res).not.toBe(null);
// });

// test("Get ideas by ancestor_id", async () => {
//   const ancestorId = "321";
//   let res = await getIdeasByAncestorId(ancestorId);
//   console.log("result_3", res);
//   expect(res).not.toBe([]);
// });


///////////////////////////////////////////////////////////////////////////////

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