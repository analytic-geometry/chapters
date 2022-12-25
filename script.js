function draw() {
    draw_sum_of_vectors();
    draw_vector_multiplied_by_value();
    draw_ratio();
}

function draw_ratio() {
    var board = JXG.JSXGraph.initBoard('ratio', {boundingBox: [-10, -10, 10, 10], showCopyright: false});
    var A = board.create('point', [-5, 5], {withLabel: true, name:'A'});
    var B = board.create('point', [4, -4], {withLabel: true, name:'B'});
    var AB = board.create('arrow', [A, B], {withLabel: false});
    var ticks = board.create('ticks', [AB], {ticksDistance: 2});
    var t = board.create('glider', [-2, 0, AB], {name: 'C', label: {offset: [20, 0]}});
    var txt = board.create('text', [1, 2, function() { return "\\(\\lambda = \\frac{AC}{CB} = \\)" + t.position.toFixed(2); }], {"fontSize": 20});

}

function draw_sum_of_vectors()
{
    var board = JXG.JSXGraph.initBoard('sum', {boundingBox: [-10, -10, 10, 10], showCopyright: false});
    var A = board.create('point', [-7.0, 5.0]);
    var B = board.create('point', [-4.0, -6.0]);
    var C = board.create('point', [7.0, -3.0]);
    var AB = board.create('arrow', [A, B]);
    var labelAB = board.create('midpoint', [AB], {withLabel: true, name: 'a', color: 'none'})
    var BC = board.create('arrow', [B, C]);
    var labelBC = board.create('midpoint', [BC], {withLabel: true, name: 'b', color: 'none'})
    var AC = board.create('arrow', [A, C]);
    var labelAC = board.create('midpoint', [AC], {withLabel: true, name: 'a + b', color: 'none', label: {offset: [10, -10]}})

}

function draw_vector_multiplied_by_value()
{
    JXG.Options.text.useMathJax = true;
    var board = JXG.JSXGraph.initBoard('mult', {boundingBox: [-10, -10, 10, 10], showCopyright: false});
    var A = board.create('point', [-2.5, 1.0]);
    //var txt = board.create('text', [1, 2, function() { return "\\(\\lambda = \\)" + t.position.toFixed(2); }]);

    var sl = board.create('slider', [[-7, 8], [5, 8], [-7, 5, 10]], {
  baseline: { strokeColor: 'rgb(255, 0, 0)'},
  highline: { strokeColor: 'yellow'},
  fillColor: 'yellow',
  label: {
             fontSize: 20,
             display: 'html',
             cssStyle: 'font-family: MJXZERO, MJXTEX',
             offset: [-10, -5]
        },
  suffixLabel: '\\(\\lambda = \\)',
  postLabel: ''

});
    var t = board.create('transform', [function(){ return sl.Value(); }, function(){ return -sl.Value(); }], {type: 'translate'})
    var C = board.create('point', [A, t]);
    //var ac = board.create('line', [A, C]);
    var AC = board.create('arrow', [A, C]);
    //var t = board.create('glider', [-2, 0, AC], {name: 't'});
    

}