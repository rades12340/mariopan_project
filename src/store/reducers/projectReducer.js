const initialState = {
  projects: [
    {
      id: 1,
      title: "this is my redux project file1",
      content: "some of the biggest joints to be here"
    },
    {
      id: 2,
      title: "you should be aware of this project whenever you can",
      content: "going back to whenever you can"
    },
    {
      id: 3,
      title: "my biggest concern is not to be productive",
      content: "going back to school is just a big trouble"
    }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("created project", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
