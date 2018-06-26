import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
	type: ADD_COMMENT,
	id: 1,
	text: 'My first comment!' 
}

{
	type: EDIT_COMMENT,
	id: 2,
	text: 'Edit text'
}

{
	type: REMOVE_COMMENT,
	id: 19,
}

{
	type: THUMB_UP_COMMENT,
	id: 13,
	thumbs: 3,
}

{
	type: THUMB_DOWN_COMMENT,
	id: 14,
	thumbs: -4,
}

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
        id: uuid.v4()
	}
}

function editComment(text) {
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

function thumbUpComment(thumbs) {
	return {
		type: THUMB_UP_COMMENT,
		thumbs,
		id: uuid.v4()
	}
}

function thumbDownComment(thumbs) {
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

boundAddComment('New comment!');
boundThumbUpComment(15);
