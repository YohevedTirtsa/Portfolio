function chargeProjet(projetPage)
{
	$("#projetVisu").load(projetPage);
	$("#projets").hide();
	$("#projetVisu").show();
}

function chargeListeProjets()
{
	$("#projets").show();
	$("#projetVisu").hide();
}