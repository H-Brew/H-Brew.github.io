class Rendermetamorphosiss {
	static $getRenderedmetamorphosis (psi) {
		const renderer = Renderer.get().setFirstSection(true);
		return $$`
			${Renderer.utils.getBorderTr()}
			${Renderer.utils.getExcludedTr({entity: psi, dataProp: "metamorphosis"})}
			${Renderer.utils.getNameTr(psi, {page: UrlUtil.PG_metamorphosisS})}
			<tr><td colspan="6"><i>${Renderer.metamorphosis.getTypeOrderString(psi)}</i></td></tr>
			<tr><td class="divider" colspan="6"><div></div></td></tr>
			<tr class="text"><td colspan="6">${Renderer.metamorphosis.getBodyText(psi, renderer)}</td></tr>
			${Renderer.utils.getPageTr(psi)}
			${Renderer.utils.getBorderTr()}
		`;
	}
}
