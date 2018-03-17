FScloud v3.0 alpha
=======

FSCloud (New project with javascript and node.js)

#### Notas LDAP AGUEDA
No file "client\fscloud\modules\billing-manager\modules\billing-reports\modules\settings\cmds\settings.php"
- esta limitado só para agueda "L76: if(($_SESSION['domain_name']==='ipbx.cm-agueda.pt'))"
 
 As configurações Ldap estão neste momento no código, deve-se ir ler a DB(por fazer)
 - "client\fscloud\modules\billing-manager\modules\billing-reports\modules\settings\cmds\control_function.php"
 - - função "fromLdapToDatabase"
 
 Carregar a bd com conf. Agueda
 - "client\fscloud\modules\billing-manager\modules\billing\ldap_cmagueda_20170314.sql"
 