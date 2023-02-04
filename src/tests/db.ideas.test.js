import { getIdeaByIdeaId, getIdeasByUserId, getIdeasByAncestorId, addIdea, getAllIdeas, updateIdeaByIdeaId } from '../common/services/db/ideas';
import { connectIdeas, connectIdeas2 } from '../common/utils/firebase/firebase.util';

// test("Add an idea", async () => {
//   const data = {
//     title: "Test Title 222",
//     brief: "This is a brief oh",
//     media: {
//       name: "media name",
//       type: "image",
//       source: {
//         url: "NOT A URL",
//       }
//     },
//     details: "ideaDetail_id FAKE",
//     author: "neOMQadmXDU3Ne5SBzm8cr0k25A2",
//     parent: "PARENT",
//     ancestor: "ANCESTOR_ID",
//     likes: 8,
//     reposts: 1
//   };
//   const content = `Proin tincidunt ac ipsum sed fermentum. Maecenas mattis in nunc non placerat. Phasellus quis convallis lacus. Donec molestie a turpis non congue. Nulla vel volutpat erat. Donec vestibulum.`;
//   const userRole = "developer";
  
//   const res = await addIdea(data, content, userRole);
//   console.log("idea_id = ", res.id);
//   expect(res).not.toBe(null);
// });

// test("Get idea by idea_id", async () => {
//   const ideaId = "h8WAnPAHfhSgYlObbb6C";
//   let res = await getIdeaByIdeaId(ideaId);
//   console.log("result_1", res);
//   expect(res).not.toBe(null);
// });

// test("Get all ideas", async () => {
//   const res = await getAllIdeas();
//   console.log("All Ideas", res);
//   console.log("Size", res.length);
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


// test("Update Idea", async () => {
//   const id = "GbRgxe2fmxQmhKpU1svv";
//   const data = { "likes": 66 };
//   let res = await updateIdeaByIdeaId(id, data);
//   console.log("result_4", res);
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

test("Dummy Test", async () => {
  return true;
});