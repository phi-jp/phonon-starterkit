
riot.tag2('home', '<header class="header-bar"> <div class="center"> <h1 class="title">Phonon Starterkit</h1> </div> </header> <div class="content"> <ul class="list"> <li class="divider"><a href="#!subpage/hoge">hoge</a></li> <li class="divider"><a href="#!subpage/foo">foo</a></li> <li class="divider"><a href="#!subpage/bar">bar</a></li> </ul> </div>', '', '', function(opts) {
});

riot.tag2('subpage', '<header class="header-bar"> <div class="left"> <button data-navigation="$previous-page" class="btn pull-left icon icon-arrow-back"></button> </div> <div class="center"> <h1 class="title">サブページだよー</h1> </div> </header> <div class="content"> <ul class="list"> <li class="divider">{name}</li> </ul> </div>', '', '', function(opts) {
    var self = this;
    this.on('close', function(e) {
      e.close();
    });
    this.on('hashchanged', function(name) {
        self.name = name
        self.update()
    })
});