import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
        id: uuid.v4()
	}
}

function editComment(id) {
	return {
		type: EDIT_COMMENT,
		text,
        id: uuid.v4()
	}
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		thumbs,
		id: uuid.v4()
	}
}

function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		thumbs,
		id: uuid.v4()
	}
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = text => dispatch(editComment(text)); 
const boundRemoveComment = text => dispatch(removeComment(id));
const boundThumbUpComment = text => dispatch(thumbUpComment(thumbs));
const boundThumbDownComment = text => dispatch(thumbDownComment(thumbs));