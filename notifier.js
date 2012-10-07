djId = '';

function djs() {
    for (var i in turntable) {
        if (turntable[i].djIds) {
            return turntable[i].djIds;
        }
    }
}
turntable.addEventListener('message', function (m) {
    if (m.command == 'newsong') {
        djId = m.room.metadata.current_dj;
    }
    if (m.command == 'newsong' || m.command == 'rem_dj') {
        if (djs().indexOf(turntable.user.id) == djs().indexOf(djId) + 1) {
            alert("It's your turn to connect!");
        }
    }
});