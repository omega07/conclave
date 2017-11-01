import Editor from './editor';
import $ from 'jquery';

const editor = new Editor($('#write'));

editor.$editor.keydown(e => {
  const char = e.key;

  if (!char.match(/^(\w|\W)$/)) {
    return false;
  }

  const index = $(e.target).val().length;
  const charObj = editor.model.localInsert(char, index);
  console.log(index, charObj);

  $('#read').val(editor.model.text);
});