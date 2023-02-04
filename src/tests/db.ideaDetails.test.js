import { addIdeaDetails, getIdeaDetailByIdeaId } from "../common/services/db/ideaDetails";

// test("Add an idea detail", async () => {
//   const userRole = "Investor";
//   const userId = "neOMQadmXDU3Ne5SBzm8cr0k25A2";
//   const data = {
//     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit dui eget ipsum pretium, at eleifend elit luctus. Fusce ornare arcu diam. Suspendisse venenatis ex est, ac pharetra ante fringilla nec. Aliquam volutpat nisi pellentesque, dignissim nisl non, rhoncus libero. Suspendisse quam dolor, varius et urna sed, consequat congue libero. Donec rutrum, dui eget maximus hendrerit, libero leo maximus libero, ac tincidunt velit turpis sed odio. Phasellus euismod porttitor sapien, a feugiat ligula finibus consequat. Aliquam interdum convallis sapien, ac mattis neque. In velit est, convallis a elit vitae, convallis laoreet lorem. Integer commodo sagittis mi, eu pharetra lorem lacinia rutrum. Mauris porttitor ipsum diam, at rutrum odio pellentesque sit amet. Nulla ac tortor sed ex viverra feugiat id a quam. Maecenas mollis tristique tellus, fringilla dignissim nunc aliquam eu. Vestibulum id erat at erat dapibus iaculis et ac nunc. Nunc tempor mi elit, vel efficitur nisl sollicitudin volutpat. Morbi at sollicitudin lorem.
//     Sed elementum, leo eget bibendum semper, elit leo scelerisque odio, vitae consectetur augue mi vitae risus. Suspendisse vitae ante in magna lobortis pellentesque. Phasellus ultrices quis diam id ornare. Nam sodales malesuada est at pretium. Nulla ac est quis nibh imperdiet posuere eu a ipsum. Vestibulum et nulla dolor. Nunc quis neque eget orci mollis molestie ac a nunc. Fusce eget gravida dolor.
//     Praesent ut tortor efficitur, dictum arcu sed, pellentesque justo. Nullam viverra feugiat accumsan. In consectetur erat vitae semper volutpat. Pellentesque mollis massa posuere, pulvinar lectus quis, porttitor quam. Morbi sed elit vel lorem sollicitudin feugiat. Nulla pharetra, lacus ut euismod eleifend, erat nisi porttitor nulla, eu ullamcorper odio magna ut est. Cras quis interdum libero, in blandit risus. Curabitur ultrices cursus velit, vel semper felis consequat sed. Fusce vel nisi ullamcorper, condimentum nisi eget, commodo metus. Mauris sed laoreet turpis. Fusce elementum quam non.`,
//     ideaComments: [],
//     tags: [],
//     collaborators: {
//       "Designer": [],
//       "Developer": [],
//       "Investor": [],
//       "Product Manager": []
//     }
//   };

//   if (userRole === "Investor") {
//     data["collaborators"]["Investor"].push(userId);
//   }

//   const res = await addIdeaDetail(data);
//   console.log("addDetail_result", res);

//   expect(res).not.toBe(null);
// });


// test("Get an ideaDetail by id", async () => {
//   const testId = "LGcx9tOBE9UwHhwJT3Ux";

//   const res = await getIdeaDetailByIdeaId(testId);
//   expect(res).not.toBe(null);
// });

test("Dummy Test", async () => {
  return true;
});
