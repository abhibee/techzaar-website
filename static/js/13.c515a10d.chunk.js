(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[13],{134:function(e,t,a){"use strict";var n=a(122),r=a(133),o=a(1),i=a.n(o),l=a(45),c=a(88),m=a(837);t.a=Object(o.memo)((function(e){var t=e.color,a=e.children,o=e.theme,s=Object(l.a)(Object(r.a)(Object(r.a)({},o),{},{palette:{primary:{main:t}}})),u=function(e){e.color,e.theme,e.children;return Object(n.a)(e,["color","theme","children"])}(e);return i.a.createElement(c.a,{theme:s},i.a.createElement(m.a,Object.assign({},u,{color:"primary"}),a))}))},213:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(844),i=a(848),l=a(283),c=a(34),m=a(847),s=a(821),u=a(820),p=a(447),d=a(141),E=a.n(d);var b=Object(p.a)((function(e){var t=e.theme,a=e.paddingBottom,n=e.onClose,o=e.disabled,i=e.title,c=e.disablePadding;return r.a.createElement(m.a,{style:{paddingBottom:a?a&&c?0:a:t.spacing(3),paddingLeft:c?0:null,paddingRight:c?0:null,paddingTop:c?0:t.spacing(2),width:"100%"},disableTypography:!0},r.a.createElement(l.a,{display:"flex",justifyContent:"space-between"},r.a.createElement(s.a,{variant:"h5"},i),r.a.createElement(u.a,{onClick:n,style:{marginRight:-12,marginTop:-10},disabled:o,"aria-label":"Close"},r.a.createElement(E.a,null))))}));t.a=Object(c.a)((function(e){return{dialogPaper:{display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:e.spacing(3),maxWidth:420},actions:{marginTop:e.spacing(2)},dialogPaperScrollPaper:{maxHeight:"none"},dialogContent:{paddingTop:0,paddingBottom:0}}}),{withTheme:!0})((function(e){var t=e.classes,a=e.open,n=e.onClose,c=e.loading,m=e.headline,s=e.onFormSubmit,u=e.content,p=e.actions,d=e.hideBackdrop;return r.a.createElement(o.a,{open:a,onClose:n,disableBackdropClick:c,disableEscapeKeyDown:c,classes:{paper:t.dialogPaper,paperScrollPaper:t.dialogPaperScrollPaper},hideBackdrop:d||!1},r.a.createElement(b,{title:m,onClose:n,disabled:c}),r.a.createElement(i.a,{className:t.dialogContent},r.a.createElement("form",{onSubmit:s},r.a.createElement("div",null,u),r.a.createElement(l.a,{width:"100%",className:t.actions},p))))}))},880:function(e,t,a){"use strict";a.r(t);var n=a(800),r=a.n(n),o=a(802),i=a(99),l=a(1),c=a.n(l),m=a(803),s=a(282),u=a(447),p=a(283),d=a(856),E=a(837),b=a(518),h=a(865),g=a(133),f=a(122);function C(e){var t=e.component,a=e.inputRef,n=Object(f.a)(e,["component","inputRef"]);return c.a.useImperativeHandle(a,(function(){return{focus:function(){}}})),c.a.createElement(t,n)}var v=Object(u.a)((function(e){var t=e.stripeOptions,a=e.StripeElement,n=(e.select,e.theme),r=Object(f.a)(e,["stripeOptions","StripeElement","select","theme"]),o=Object(g.a)({style:{base:Object(g.a)(Object(g.a)({},n.typography.body1),{},{color:n.palette.text.primary,fontSize:"16px",fontSmoothing:"antialiased","::placeholder":{color:n.palette.text.secondary}}),invalid:{iconColor:n.palette.error.main,color:n.palette.error.main}}},t);return c.a.createElement(b.a,Object.assign({InputLabelProps:{shrink:!0},inputProps:{component:a,options:o},InputProps:{inputComponent:C}},r))}));var O=function(e){var t=e.stripeError,a=e.setStripeError,n=e.amount,r=e.amountError,o=e.onAmountChange,i=e.name,l=e.setName;return c.a.createElement(d.a,{container:!0,spacing:2,justify:"space-between"},c.a.createElement(d.a,{item:!0,xs:8},c.a.createElement(b.a,{variant:"outlined",margin:"none",required:!0,label:"Your Name",value:i,onChange:function(e){l(e.target.value)},fullWidth:!0,autoFocus:!0,autoComplete:"off",type:"text"})),c.a.createElement(d.a,{item:!0,xs:4},c.a.createElement(b.a,{required:!0,value:n,onChange:function(e){o(parseInt(e.target.value))},error:!!r,helperText:r,variant:"outlined",fullWidth:!0,type:"number",margin:"none",label:"Amount",InputProps:{startAdornment:c.a.createElement(h.a,{position:"start"},"$")}})),c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(v,{margin:"none",fullWidth:!0,label:"Credit Card",error:!!t,helperText:t,variant:"outlined",required:!0,StripeElement:s.CardElement,onChange:function(){t&&a("")}})))};var j=function(e){var t=e.stripeError,a=e.setStripeError,n=e.amount,r=e.amountError,o=e.onAmountChange,i=e.name,l=e.setName,m=e.email,u=e.setEmail;return c.a.createElement(d.a,{container:!0,spacing:2,justify:"space-between"},c.a.createElement(d.a,{item:!0,xs:8},c.a.createElement(b.a,{variant:"outlined",margin:"none",required:!0,label:"Your Name",value:i,onChange:function(e){l(e.target.value)},fullWidth:!0,autoFocus:!0,autoComplete:"off",type:"text"})),c.a.createElement(d.a,{item:!0,xs:4},c.a.createElement(b.a,{required:!0,value:n,onChange:function(e){o(parseInt(e.target.value))},error:!!r,helperText:r,variant:"outlined",fullWidth:!0,type:"number",margin:"none",label:"Amount",InputProps:{startAdornment:c.a.createElement(h.a,{position:"start"},"$")}})),c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(b.a,{required:!0,variant:"outlined",fullWidth:!0,value:m,onChange:function(e){u(e.target.value)},type:"email",margin:"none",label:"Email"})),c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(v,{margin:"none",variant:"outlined",fullWidth:!0,label:"IBAN",error:!!t,helperText:t,required:!0,StripeElement:s.IbanElement,stripeOptions:{supportedCountries:["SEPA"]},onChange:function(){t&&a("")}})))},S=a(213),y=a(134),x=a(140),w=a(123),P=Object(m.a)("pk_test_6pRNASCoBOKtIshFeQd4XMUh"),k=["Credit Card","SEPA Direct Debit"],A=Object(u.a)((function(e){var t=e.open,a=e.theme,n=e.onClose,m=e.onSuccess,u=Object(l.useState)(!1),b=Object(i.a)(u,2),h=b[0],g=b[1],f=Object(l.useState)("Credit Card"),C=Object(i.a)(f,2),v=C[0],P=C[1],A=Object(l.useState)(""),I=Object(i.a)(A,2),N=I[0],B=I[1],D=Object(l.useState)(""),T=Object(i.a)(D,2),W=T[0],F=T[1],q=Object(l.useState)(""),_=Object(i.a)(q,2),R=_[0],Y=_[1],z=Object(l.useState)(0),H=Object(i.a)(z,2),J=H[0],K=H[1],L=Object(l.useState)(""),M=Object(i.a)(L,2),$=M[0],Q=M[1],U=Object(s.useElements)(),X=Object(s.useStripe)(),G=function(e){e<0||($&&Q(""),K(e))},V=function(){switch(v){case"Credit Card":return{type:"card",card:U.getElement(s.CardElement),billing_details:{name:W}};case"SEPA Direct Debit":return{type:"sepa_debit",sepa_debit:U.getElement(s.IbanElement),billing_details:{email:R,name:W}};default:throw new Error("No case selected in switch statement")}};return c.a.createElement(S.a,{open:t,onClose:n,headline:"Add Balance",hideBackdrop:!1,loading:h,onFormSubmit:function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(J<=0)){e.next=4;break}return Q("Can't be zero"),e.abrupt("return");case 4:return N&&B(""),g(!0),e.next=8,X.createPaymentMethod(V());case 8:if(a=e.sent,!(n=a.error)){e.next=14;break}return B(n.message),g(!1),e.abrupt("return");case 14:m();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),content:c.a.createElement(p.a,{pb:2},c.a.createElement(p.a,{mb:2},c.a.createElement(d.a,{container:!0,spacing:1},k.map((function(e){return c.a.createElement(d.a,{item:!0,key:e},c.a.createElement(y.a,{variant:e===v?"contained":"outlined",disableElevation:!0,onClick:function(){B(""),P(e)},color:a.palette.common.black},e))})))),function(){switch(v){case"Credit Card":return c.a.createElement(l.Fragment,null,c.a.createElement(p.a,{mb:2},c.a.createElement(O,{stripeError:N,setStripeError:B,setName:F,name:W,amount:J,amountError:$,onAmountChange:G})),c.a.createElement(x.a,null,"You can check this integration using the credit card number"," ",c.a.createElement("b",null,"4242 4242 4242 4242 04 / 24 24 242 42424")));case"SEPA Direct Debit":return c.a.createElement(l.Fragment,null,c.a.createElement(p.a,{mb:2},c.a.createElement(j,{stripeError:N,setStripeError:B,setName:F,setEmail:Y,name:W,email:R,amount:J,amountError:$,onAmountChange:G})),c.a.createElement(x.a,null,"You can check this integration using the IBAN",c.a.createElement("br",null),c.a.createElement("b",null,"DE89370400440532013000")));default:throw new Error("No case selected in switch statement")}}()),actions:c.a.createElement(l.Fragment,null,c.a.createElement(E.a,{fullWidth:!0,variant:"contained",color:"secondary",type:"submit",size:"large",disabled:h},"Pay with Stripe ",h&&c.a.createElement(w.a,null)))})}));t.default=function(e){var t=e.open,a=e.onClose,n=e.onSuccess;return c.a.createElement(s.Elements,{stripe:P},t&&c.a.createElement(A,{open:t,onClose:a,onSuccess:n}))}}}]);
//# sourceMappingURL=13.c515a10d.chunk.js.map