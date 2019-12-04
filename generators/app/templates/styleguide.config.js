module.exports = {
	// set your styleguidist configuration here
	title: '组件文档',
	components: 'src/components/**/[A-Z]*.vue',
	// defaultExample: true,
	// sections: [
	//   {
	//     name: 'First Section',
	//     components: 'src/components/**/[A-Z]*.vue'
	//   }
	// ],
	// webpackConfig: {
	//   // custom config goes here
	// },
	pagePerSection:true,// 每个组件独占一页，而不是都出现在一个页面中
	exampleMode: 'expand'
}
