export function containerLink(state = {}, action) {
    switch(action.type){
        case "left_link_right":
            console.log(state);
            //console.log({linkIndex:action.json,...state});
            return {...state,linkIndex:action.json};
            break;
        default:
            return state
    }
}

