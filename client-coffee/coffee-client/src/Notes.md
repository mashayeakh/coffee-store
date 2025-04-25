
# when we try to create an user in db using firebase. 
just remember, creating user is another type of post method. you just need to create create another document/table in mongo under the same DB and do your post method work.


# Put Vs Patch

put replaces whole doc. 
If the doc is requested by put, we can expect the whole doc will be replaced by the put requested doc. In this case, we might lose any field. if that field is not edited. 

Patch works on existing doc. 
If the doc is requested by patch, we can expect the only edited field will be replaced by the patch requested doc. In this case, we won't lose any field unlike put. if that field is not edited. 