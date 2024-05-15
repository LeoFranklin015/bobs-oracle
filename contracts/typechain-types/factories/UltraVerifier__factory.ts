/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UltraVerifier, UltraVerifierInterface } from "../UltraVerifier";

const _abi = [
  {
    inputs: [],
    name: "INVALID_VERIFICATION_KEY",
    type: "error",
  },
  {
    inputs: [],
    name: "MOD_EXP_FAILURE",
    type: "error",
  },
  {
    inputs: [],
    name: "OPENING_COMMITMENT_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "PAIRING_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "PAIRING_PREAMBLE_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "POINT_NOT_ON_CURVE",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
    ],
    name: "PUBLIC_INPUT_COUNT_INVALID",
    type: "error",
  },
  {
    inputs: [],
    name: "PUBLIC_INPUT_GE_P",
    type: "error",
  },
  {
    inputs: [],
    name: "PUBLIC_INPUT_INVALID_BN128_G1_POINT",
    type: "error",
  },
  {
    inputs: [],
    name: "getVerificationKeyHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "_publicInputs",
        type: "bytes32[]",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50620000226103806133006200034c565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47600161040051610420518382830984600386838609088583840914841693505050506104405161046051838283098460038683860908858384091484169350505050610480516104a0518382830984600386838609088583840914841693505050506104c0516104e051838283098460038683860908858384091484169350508160005280602052505061050051610520518382830984600386838609088583840914841693505050506105405161056051838283098460038683860908858384091484169350505050610580516105a0518382830984600386838609088583840914841693505050506105c0516105e05183828309846003868386090885838409148416935050505061060051610620518382830984600386838609088583840914841693505050506106405161066051838283098460038683860908858384091484169350505050610680516106a0518382830984600386838609088583840914841693505050506106c0516106e05183828309846003868386090885838409148416935050505061070051610720518382830984600386838609088583840914841693505050506107405161076051838283098460038683860908858384091484169350505050610780516107a0518382830984600386838609088583840914841693505050506107c0516107e05183828309846003868386090885838409148416935050505061080051610820518382830984600386838609088583840914841693505050506108405161086051838283098460038683860908858384091484169350505050610880516108a0518382830984600386838609088583840914841693505050506108c0516108e05183828309846003868386090885838409148416935050505061090051610920518382830984600386838609088583840914841693505050506109405161096051838283098460038683860908858384091484169350505050610980516109a051838283098460038683860908858384091484169350505050806200034457637e5769bf60e01b60005260046000fd5b505062000b91565b6200036382826200036760201b620023271760201c565b5050565b6110006000830152600260208301527f0931d596de2fd10f01ddd073fd5a90a976f169c76f039bb91c4775720042d43a60408301527f3061482dfa038d0fb5b4c0b226194047a2616509f531d4fa3acdb77496c1000160608301527f2c63200fa9193f29c2d71cb14b75a01ec5ccbcf1d9223387a2840997b8cde65c60808301527f060f19980f6d8ba1fd8f428a7e54909cfe4efc37ff0103a0f579f817d4675ca460a08301527f1135263c46d03ff16618ba5601781d1c8d649f704db3a1798d34571032c5ea5a60c08301527f301498eb3fff48d3c86d19473b5dc2211163b844366ad8d5ab99ed4dc1d040ab60e08301527f22898c9c56df1b674e710c2e520dc10d5cf88efa5617a0bc7b07790caab508d26101008301527f14c01cffd14bd05d0a4c809a733185a409161846381d30b34fe07e09ebc3e5586101208301527f0e85bf358f64d80f1d640d7c54bc9a4898e0b794ccffba736aaec7e0a5784cda6101408301527f06692480278266e86437a696ed6773140068169bcf913f1493343cb51ec33d8f6101608301527f04c5b32c53917d73ab8e42aa6bf3dfa7094b08c2ec350bc3fcdc00ce0b83d28e6101808301527f27bbdf230a3154482abcf459d9854d68de77f04de8d3faf2618cb4cb467438af6101a08301527f21c1a434b039ec5fda090aef22d35d4a0ac9b9afcadf64ca0a1acbf8e535722e6101c08301527f23d25050a3a33939a5432a341e757da543d72b4fba0796086f2d89211a1611216101e08301527f17448549e63084bb056d4a14bc7953c0321f1294f93473d64b9aee0f0a9a63fa6102008301527f1e8516ef4a28ed600b1dc450f240b485708c4e75d368cf820260e360b63360c36102208301527f1f628e98a0e403ce04c1c7b2c140903f6c0aff34be1152283fed7a9aa481056f6102408301527f2d387a823090bc4d5644d71f9e113ea68a712ae0a54a801101b7fbbe106de1e76102608301527f13982fd0cf8da5082a77561113bb5ee51e2e82380da3da5ad0f24e49e5f322086102808301527f1aa5ffd5aa4c16d1c66e18c4574a3ab0b25e9b4e4e04ad1280d1a264237717e06102a08301527f1750f44d3f9dfad78a1e2127ef91051ce018f20536fe45ca28dcc7b248389fc06102c08301527f1a05418f502a965c39994cd3f83e39164b49c0f27d4f5ac4550751cc0a24bb586102e08301527f05dcce15c0bd1d7a5ce634d9b1dfdbd8d2a0bc95d6d21d17664b110405d1176e6103008301527f277b277b957fd2d1db0c0c9c26b1a4fa572338a374363601715cbc85ecb89fd06103208301527f0d41973e4b0d5372b99f9c675ea79c7f9454c204e7f514afeb329711f2b1f2316103408301527f1ccc3c99a601a4bfac9ae9b1329f410f7af12f482ab03d40b6932e39fd6d6cba6103608301527f2fbcb5aa7f39b041fa73b50b7cab9c74f43476440f48df8902248413767488fa6103808301527f2009a0e64ff783907a34a6bae2fb90709966873a6e9e47517d1ed691bc040b8a6103a08301527f042d5b408e94a576a95f43a0141227ed36d2f327585f2cb27ce04ef3d825725b6103c08301527f18188bcaedda39036a266c1d54d010d4dee3440a7ca02ae418ba9ef4446b0e636103e08301527f259f452dc7fd2dda4013dba2196852bcf43c285b1d1f7f85341f3615d25fe97b6104008301527f117500555dd886209c0b10ee8cd10e711e890a1c99a8f689419da8c52d2e8e9d6104208301527f2577f542178a07dac262fdabad6f55a84fca32b13b92e520bb91a7455f78ccf16104408301527f0fc87ae27122e60eaacc070bd59aafe12644a82ee1345497f8c0302e92925c686104608301527f1612f501335a4b72ac55dbe2fd1a75e5fe2c041687603b6577581d673d13be506104808301527f160e8ef7ff5315cb640ec82e965db270846e904bb7d1c7ff02f32823de6c1c716104a08301527f2d540ff1653b38acbcb9cda315442364007633f529476b2f169a0ff131bfb3196104c08301527f2198b9feb61f8160e357b8bb7ca329713898655cc94a0ac2d84944c737cf57e56104e08301527f11c8df52c3ef754f80d11792cea4b7ad74612e486596cbe7f7d6a05f19c694446105008301527f10c8a36cbb2fd9ed8875b5106a37162ac2932f3bd1b6942b132546d2110a63e26105208301527e8ed376d90ce1119e6426d39e3c7e4d132be44bf71468decaf7eeff47dfc8e16105408301527f26a0ffc7fd1facd9174cc10b6e35a78e3dfdd75d40f1a6726d674aacb026c88d6105608301527f18e6f595a47d237a275e1874dc49c0ada87dafc94f020ccbe38c155f6c25def26105808301527f2035f52a58ece6bdb2a33c3555e3d0fb80b735ee8d6c8925d2be08fd6b5fbeca6105a08301527f128f86bf0170e0a69f35156cce2d92fa85d299eaa1f3428e338bbc6b98e3686f6105c08301527f022614c8b9d0676c390590b6f5bc3f6fa455cab1e7f0cbc9f0b389daed1c8add6105e08301527e5b4c26773d43a19a7e9d64d556cdf3898479f5255649f57cb57e0f2699040d6106008301527f21597115923f0c9a7a7adf417f1c48d77a6dc79843767f91060d4ed2a250a18c610620830152600061064083015260006106608301527f260e01b251f6f1c7e7ff4e580791dee8ea51d87a358e038b4efe30fac09383c16106808301527f0118c4d5b837bcc2bc89b5b398b5974e9f5944073b32078b7e231fec938883b06106a08301527f04fc6369f7110fe3d25156c1bb9a72859cf2a04641f99ba4ee413c80da6a5fe46106c08301527f22febda3c0c0632a56475b4214e5615e11e6dd3f96e6cea2854a87d4dacc5e556106e08301527f1af864d211b88d9ccf2e371c2ba088d9269d3fdea04e05acb6f70f8dc79e0e5781525050565b612c5a8062000ba16000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063937f6a101461003b578063ea50d0e41461006e575b600080fd5b6040517faba2a7c421c864f2eaf4cab467d906bf937438507dc91d12607101f55937978a81526020015b60405180910390f35b61008161007c366004612b5f565b610091565b6040519015158152602001610065565b60006100a1610380613300612b51565b6103a0518281146100d357604051637667dc9b60e01b8152600481018290526024810184905260440160405180910390fd5b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd477f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016024600435018281350661122052826020820135066112005282604082013506611260528260608201350661124052826080820135066112a0528260a082013506611280528260c0820135066112e0528260e0820135066112c05282610100820135066113205282610120820135066113005282610140820135066113605282610160820135066113405282610180820135066113a052826101a08201350661138052826101c0820135066113e052826101e0820135066113c05282610200820135066114205282610220820135066114005282610240820135066114605282610260820135066114405282610280820135066114a052826102a08201350661148052816102c08201350661160052816102e0820135066116205281610300820135066116405281610320820135066116605281610340820135066116805281610360820135066116a05281610380820135066116c052816103a0820135066116e052816103c08201350661170052816103e0820135066117205281610400820135066117405281610420820135066117605281610440820135066117805281610460820135066117a05281610480820135066117c052816104a0820135066117e052816104c08201350661180052816104e0820135066119605281610500820135066119805281610520820135066119a05281610540820135066119c052816105608201350661184052816105808201350661186052816105a08201350661188052816105c0820135066118a052816105e0820135066118c05281610600820135066118e05281610620820135066119005281610640820135066119205281610660820135066119405281610680820135066119e052816106a08201350661200052816106c08201350661202052816106e0820135066120405281610700820135066120605281610720820135066120805281610740820135066120a05281610760820135066120c05281610780820135066120e052816107a08201350661210052816107c08201350661212052826107e08201350661232052826108008201350661230052826108208201350661236052826108408201350661234052506109c05115610535576024803501806109e05160051b0190508035602082013560441b81019050604082013560881b81019050606082013560cc1b81019050608082013560a083013560441b8101905060c083013560881b8101905060e083013560cc1b8101905061010083013561012084013560441b8101905061014084013560881b8101905061016084013560cc1b810190506101808401356101a085013560441b810190506101c085013560881b810190506101e085013560cc1b81019050836134005282613420528161344052806134605286811087841016878310888610161661052f576375d4fa5360e11b60005260046000fd5b50505050505b6103805160e01b6000526103a05160e01b60045260086000208061348052602480350160206103a05102808260206134800137600435602401915060c0826134a083013760e0016134802083810661266081905290925090508281800961268052828161268051096126a05250806000526112e0516020526112c051604052611320516060526113005160805260a0600020905081810661260052806000526001602053506021600090812082810661262052815261136051602052611340516040526113a0516060526113805160805260a09020818106612640819052828180096133205282816133205109613340528281613340510961336052806133805250806000526113e0516020526113c05160405261142051606052611400516080526114605160a0526114405160c0526114a05160e052611480516101005261012060002090508181066126c052806126e0525061260051612620516103c051600180856001602480350160206103a0510281018360058a0984600c8b0999505b818310156106f557823585811085169450858a82089050858183018909975085818c01880996505084888209905084888b0999506020830192506106b6565b5050508061070e5763374a972f60e01b60005260046000fd5b50508161300052806130205250505050508081600161260051086126205109806103805160015b8181101561074a578483840992508001610735565b5050613100528181800990508181820961312052506126c05161038051819060015b8181101561078157848384099250800161076c565b50508061304052826001840382089050613300518084036103e051858286088684840992508687848808820990508684840992508687848808820990508687888686098808820990506103c051925086828609915086600188038708878485099450876001890389898b888d8b8c0909090896506130205194508493508782860994508488878709955085898388099650868a61312051890997508760206000526020805260206040528b8b8a0960605260028c036080528b60a0526020600060c0600060055afa61085e57633e2529ef60e21b60005260046000fd5b60005198508b818a0990508b8b8a0998508b828a0991508b613120518a0998508b838a0992508b858a0998508b848a0993508b8a8a0998508b888a0997508b868a0998508b613020518d8b8c090998508b896130005109613060528b888b09613080528b848709613680528b8388096130a0528b826131005109613140528b8188096130c052505050505050505050505061264051506126005161262051828361190051840982611620510101846118e051850983611600510101098384611940518509836116605101018561192051860984611640510101098485868385096116a051096133805109858661198051870985611620510101876119605188098661160051010109925085866119c051870985611660510101876119a0518809866116405101010991508586878885870961208051096133805109870382089050856126405161338051096133805285868788613060518a0361208051086130c0510961338051098208905085612640516133805109613380528586878860018a036116a051086130a05109613380510982086135005250505050508061264051613380510961338052806117205161266051098182836120205161178051096116405108820890508161266051820990508182836120005161176051096116205108820890508161266051820990508182836119e0516117005109611600510882089050816118405183846126605161186051098586612680516118805109876126a0516118a05109080808826120c0518485612660516120e051098687612680516121005109886126a051612120510908080883846001612600510861262051098461262051866118c051870908935084818687612600518609860808925084838509935084856001612600510885099350846130a05161264051099250848385089350846116c0518509935084838603850893508481868761260051612060510961168051080892505050826130c05161332051098381850383089150836120a05183099150838461314051830983089150508261338051848386038508096135205250508061334051613380510961338052806116e0516116005109816117005161162051098261172051611640510983611740516116605109847f183227397098d014dc2822db40c0ac2e9419f4243cdcb848a1f0fac9f80000008687600389036117a0510888611760518a6116205161160051090909098586878889858a08880886088408611780510894505050505081828384856116605161160051086119e051870308611760510884600286036117a05108096126405109828384858685612040510887600189036117a051080985086117a05109613380510961354052505080613320516133805109613380526002810360038203826116005184036116205108836116205185036116405108846116405186036116605108856116605187036119e05108866133805188898888088a8b8b8a088c8a8e038e8c8d09080909099350868788612640516133805109898a8988088b8c8c8a088d8a8f038f8c8d090809090985089350868788613320516133805109898a8987088b8c8c89088d898f038f8b8c090809090985089350868788613340516133805109898a8986088b8c8c88088d888f038f8a8b090809090985089350505050836117c051820961356052505061336051613380518392500961338052806116205182036119e051088161204051612040510982611640516116405109836116e05185612040516116405109098485868384088785870888030886878788098889611620516119e0510861200051080908925050508261338051848561176051870360010884090990508261202051611640510883611640518503856116e05161204051090884858287611620518903612000510809868685090893505050828361264051613380510984856117605187036001088509099150826117e0518484840809613580525050806116205161162051098161164051611640510982611620518460118408098360048309915083600982099050836003840992508381850385848788611620516116205108612000510809089150508283846120205161164051088561164051611640510809840384856120005187036116205108850908915082613380518209905082836126405161338051098309915082611760518209905082611760518309915082836117e0518585850809613580510861358052505080613360516133805109613380528081611620516119e05109826120005161160051090881612020518303838461164051611620510985611660516116005109080882600160441b82099050826120405184038208905082828208905082611740518209905082600160441b830991508283612000516119e05109830891508261172051848561166051611640510886038508098361176051858661204051612020510887038761166051880808099250836117005185858786860808096135c0525050612000518291506140009009816119e0518208905081614000820990508161164051820890508161400082099050816116205182089050816140008209905081611600518208905081611660518303820890508161174051820990508161400061202051098261200051820890508261400082099050826119e05182089050826140008209905082611660518208905082614000820990508261164051820890508261204051840382089050826117605182099050826117205184838508096135e0525050806126605161164051098161162051820890508161266051820990508161160051820890508161266051820990508161178051820890508082611660518403830891508161364052826116005184036119e05108836116605185036120405108848560018703840883098586848803600108830991508585876126405189858b61264051890908090861362052856126605161202051099450856120005186089450856126605186099450856119e0518608945085612660518609945085858703612040510894508561164051870361202051089150858687878903600108840987858903600108099150858487036116605108868760018903830882099050868760018903880887099550866126405184099250868284089250866126405184099250868684089250866126405184099250868184089250508161360052505083611620518503612000510892508361164051850385868488036001088609089250836117005161362051099150838461174051850983089150838461176051613640510983089150836116e0518309915083846117a051613600510983089150836135c05183089250836135e05184089250836118005184099250836133805184099250826135a05283613340516133805109613380525050508061368051826135a0518461358051866135605188613540518a61352051613500510808080808096136608190526126e0516136a08190526136c0919091526102e460043501610520816136e03750506105606136a020818106612700526000819052600160205381602160002006612720526002602053816021600020066127405260036020538160216000200661276052600460205381602160002006612780526005602053816021600020066127a0526006602053816021600020066127c0526007602053816021600020066127e0526008602053816021600020066128005260096020538160216000200661282052600a6020538160216000200661284052600b6020538160216000200661286052600c6020538160216000200661288052600d602053816021600020066128a052600e602053816021600020066128c052600f602053816021600020066128e05260106020538160216000200661290052601160205381602160002006612920526012602053816021600020066129405260136020538160216000200661296052601460205381602160002006612980526015602053816021600020066129a0526016602053816021600020066129c0526017602053816021600020066129e052601860205381602160002006612a0052601960205381602160002006612a2052601a60205381602160002006612a4052601b60205381602160002006612a6052601c60205381602160002006612a8052601d60205381602160002006612aa052601d6020535060216000908120828106612ac05281526123205160205261230051604052612360516060526123405160805260a08120829006612b00526113c0516113e05184828009856003878386090886838409146114c5576328f6b59560e21b60005260046000fd5b506131609190915261318052611400516114205184828009856003878386090886838409146114ff576328f6b59560e21b60005260046000fd5b50816000528060205250506130405160405260406131a06060600060075afa90506040613160608061316060065afa8116905061144051611460518482830985600387838609088683840914611560576328f6b59560e21b60005260046000fd5b50600091909152602052613040518290800960405260406131a06060600060075afa16604061316060808160065afa81169050611480516114a05184828309856003878386090886838409146115c1576328f6b59560e21b60005260046000fd5b50600091909152602052613040518290818180090960405260406131a06060600060075afa16604061316060808160065afa8116905061120051611220518482830985600387838609088683840914611625576328f6b59560e21b60005260046000fd5b50816000528060205250508161270051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506112405161126051848283098560038783860908868384091461168d576328f6b59560e21b60005260046000fd5b50816000528060205250508161272051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050611280516112a05184828309856003878386090886838409146116f5576328f6b59560e21b60005260046000fd5b50816000528060205250508161274051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506112c0516112e051848283098560038783860908868384091461175d576328f6b59560e21b60005260046000fd5b50816000528060205250508161276051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050611300516113205184828309856003878386090886838409146117c5576328f6b59560e21b60005260046000fd5b50816000528060205250508161278051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506113405161136051848283098560038783860908868384091461182d576328f6b59560e21b60005260046000fd5b5081600052806020525050816127a051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050611380516113a0518482830985600387838609088683840914611895576328f6b59560e21b60005260046000fd5b5081600052806020525050816127c051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa8116905061040051600052610420516020526127e05160405260406131a06060600060075afa16604061316060808160065afa8116905061044051600052610460516020526128005160405260406131a06060600060075afa16604061316060808160065afa81169050610480516000526104a0516020526128205160405260406131a06060600060075afa16604061316060808160065afa811690506104c0516000526104e0516020526128405160405260406131a06060600060075afa16604061316060808160065afa8116905061050051600052610520516020526128605160405260406131a06060600060075afa16604061316060808160065afa8116905061054051600052610560516020526128805160405260406131a06060600060075afa16604061316060808160065afa81169050610580516000526105a0516020526128a05160405260406131a06060600060075afa16604061316060808160065afa811690506105c0516000526105e0516020526128c05160405260406131a06060600060075afa16604061316060808160065afa8116905061060051600052610620516020526128e05160405260406131a06060600060075afa16604061316060808160065afa8116905061064051600052610660516020526129005160405260406131a06060600060075afa16604061316060808160065afa81169050610680516000526106a0516020526129205160405260406131a06060600060075afa16604061316060808160065afa811690506106c0516000526106e0516020526129405160405260406131a06060600060075afa16604061316060808160065afa8116905061070051600052610720516020526129605160405260406131a06060600060075afa16604061316060808160065afa8116905061074051600052610760516020526129805160405260406131a06060600060075afa16604061316060808160065afa81169050610780516000526107a051602052816129a051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506107c0516000526107e051602052816129c051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506108005160005261082051602052816129e051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050610840516000526108605160205281612a0051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050610880516000526108a051602052612a205160405260406131a06060600060075afa16604061316060808160065afa811690506108c0516000526108e051602052612a405160405260406131a06060600060075afa16604061316060808160065afa811690506109005160005261092051602052612a605160405260406131a06060600060075afa16604061316060808160065afa811690506109405160005261096051602052612a805160405260406131a06060600060075afa16604061316060808160065afa81169050610980516000526109a051602052612aa05160405260406131a06060600060075afa16604061316060808160065afa8116905081826116005184612b00516119e051090861270051098283846116205186612b00516120005109086127205109820890508283846116405186612b00516120205109086127405109820890508283846116605186612b00516120405109086127605109820890508283846116805186612b00516120605109086127805109820890508283846116a05186612b00516120805109086127a05109820890508283846116c05186612b00516120a05109086127c051098208905082836116e0516127e051098208905082836117005161280051098208905082836117205161282051098208905082836117405161284051098208905082836117605161286051098208905082836117805161288051098208905082836117a0516128a051098208905082836117c0516128c051098208905082836117e0516128e051098208905082836118005161290051098208905082836119605161292051098208905082836119805161294051098208905082836119a05161296051098208905082836119c0516129805109820890508283846118405186612b00516120c05109086129a05109820890508283846118605186612b00516120e05109086129c05109820890508283846118805186612b00516121005109086129e05109820890508283846118a05186612b0051612120510908612a0051098208905082836118c051612a2051098208905082836118e051612a40510982089050828361190051612a60510982089050828361192051612a80510982089050828361194051612aa0510982089050826136605182089050600160005260026020528083036040525060406131a06060600060075afa16604061316060808160065afa168061201857634e71976360e01b60005260046000fd5b612b00516126c0516123005161232051868283098760038983860908888384091461204e576328f6b59560e21b60005260046000fd5b50816000528060205250508060405260406131a06060600060075afa92506040613160608061316060065afa83169250612340516123605186828309876003898386090888838409146120ac576328f6b59560e21b60005260046000fd5b5081600052806020525050836103c05185838509096040525060406131a06060600060075afa821691506040613220608061316060065afa8216915061230051600052612320516020526123405160405261236051606052806080526040806060604060075afa8216915060406131e06080600060065afa82169150613200518403613200526109c0511561220d5761340051613420518582830986600388838609088783840914612169576328f6b59560e21b60005260046000fd5b50600091909152602052828180096040526040606080600060075afa82169150613440516134605185828309866003888386090887838409146121b7576328f6b59560e21b60005260046000fd5b50600091825260205260409060608160075afa821691506132205160a0526132405160c05260406132206080606060065afa821691506131e0516040526132005160605260406131e06080600060065afa821691505b5080612224576301882d8160e01b60005260046000fd5b61322051600052613240516020527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26040527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6060527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6080527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa60a0526131e05160c0526132005160e052610a005161010052610a205161012052610a405161014052610a60516101605260206000610180600060085afa905060005181166123195763d71fd26360e01b60005260046000fd5b505050600160005260206000f35b6110006000830152600260208301527f0931d596de2fd10f01ddd073fd5a90a976f169c76f039bb91c4775720042d43a60408301527f3061482dfa038d0fb5b4c0b226194047a2616509f531d4fa3acdb77496c1000160608301527f2c63200fa9193f29c2d71cb14b75a01ec5ccbcf1d9223387a2840997b8cde65c60808301527f060f19980f6d8ba1fd8f428a7e54909cfe4efc37ff0103a0f579f817d4675ca460a08301527f1135263c46d03ff16618ba5601781d1c8d649f704db3a1798d34571032c5ea5a60c08301527f301498eb3fff48d3c86d19473b5dc2211163b844366ad8d5ab99ed4dc1d040ab60e08301527f22898c9c56df1b674e710c2e520dc10d5cf88efa5617a0bc7b07790caab508d26101008301527f14c01cffd14bd05d0a4c809a733185a409161846381d30b34fe07e09ebc3e5586101208301527f0e85bf358f64d80f1d640d7c54bc9a4898e0b794ccffba736aaec7e0a5784cda6101408301527f06692480278266e86437a696ed6773140068169bcf913f1493343cb51ec33d8f6101608301527f04c5b32c53917d73ab8e42aa6bf3dfa7094b08c2ec350bc3fcdc00ce0b83d28e6101808301527f27bbdf230a3154482abcf459d9854d68de77f04de8d3faf2618cb4cb467438af6101a08301527f21c1a434b039ec5fda090aef22d35d4a0ac9b9afcadf64ca0a1acbf8e535722e6101c08301527f23d25050a3a33939a5432a341e757da543d72b4fba0796086f2d89211a1611216101e08301527f17448549e63084bb056d4a14bc7953c0321f1294f93473d64b9aee0f0a9a63fa6102008301527f1e8516ef4a28ed600b1dc450f240b485708c4e75d368cf820260e360b63360c36102208301527f1f628e98a0e403ce04c1c7b2c140903f6c0aff34be1152283fed7a9aa481056f6102408301527f2d387a823090bc4d5644d71f9e113ea68a712ae0a54a801101b7fbbe106de1e76102608301527f13982fd0cf8da5082a77561113bb5ee51e2e82380da3da5ad0f24e49e5f322086102808301527f1aa5ffd5aa4c16d1c66e18c4574a3ab0b25e9b4e4e04ad1280d1a264237717e06102a08301527f1750f44d3f9dfad78a1e2127ef91051ce018f20536fe45ca28dcc7b248389fc06102c08301527f1a05418f502a965c39994cd3f83e39164b49c0f27d4f5ac4550751cc0a24bb586102e08301527f05dcce15c0bd1d7a5ce634d9b1dfdbd8d2a0bc95d6d21d17664b110405d1176e6103008301527f277b277b957fd2d1db0c0c9c26b1a4fa572338a374363601715cbc85ecb89fd06103208301527f0d41973e4b0d5372b99f9c675ea79c7f9454c204e7f514afeb329711f2b1f2316103408301527f1ccc3c99a601a4bfac9ae9b1329f410f7af12f482ab03d40b6932e39fd6d6cba6103608301527f2fbcb5aa7f39b041fa73b50b7cab9c74f43476440f48df8902248413767488fa6103808301527f2009a0e64ff783907a34a6bae2fb90709966873a6e9e47517d1ed691bc040b8a6103a08301527f042d5b408e94a576a95f43a0141227ed36d2f327585f2cb27ce04ef3d825725b6103c08301527f18188bcaedda39036a266c1d54d010d4dee3440a7ca02ae418ba9ef4446b0e636103e08301527f259f452dc7fd2dda4013dba2196852bcf43c285b1d1f7f85341f3615d25fe97b6104008301527f117500555dd886209c0b10ee8cd10e711e890a1c99a8f689419da8c52d2e8e9d6104208301527f2577f542178a07dac262fdabad6f55a84fca32b13b92e520bb91a7455f78ccf16104408301527f0fc87ae27122e60eaacc070bd59aafe12644a82ee1345497f8c0302e92925c686104608301527f1612f501335a4b72ac55dbe2fd1a75e5fe2c041687603b6577581d673d13be506104808301527f160e8ef7ff5315cb640ec82e965db270846e904bb7d1c7ff02f32823de6c1c716104a08301527f2d540ff1653b38acbcb9cda315442364007633f529476b2f169a0ff131bfb3196104c08301527f2198b9feb61f8160e357b8bb7ca329713898655cc94a0ac2d84944c737cf57e56104e08301527f11c8df52c3ef754f80d11792cea4b7ad74612e486596cbe7f7d6a05f19c694446105008301527f10c8a36cbb2fd9ed8875b5106a37162ac2932f3bd1b6942b132546d2110a63e26105208301527e8ed376d90ce1119e6426d39e3c7e4d132be44bf71468decaf7eeff47dfc8e16105408301527f26a0ffc7fd1facd9174cc10b6e35a78e3dfdd75d40f1a6726d674aacb026c88d6105608301527f18e6f595a47d237a275e1874dc49c0ada87dafc94f020ccbe38c155f6c25def26105808301527f2035f52a58ece6bdb2a33c3555e3d0fb80b735ee8d6c8925d2be08fd6b5fbeca6105a08301527f128f86bf0170e0a69f35156cce2d92fa85d299eaa1f3428e338bbc6b98e3686f6105c08301527f022614c8b9d0676c390590b6f5bc3f6fa455cab1e7f0cbc9f0b389daed1c8add6105e08301527e5b4c26773d43a19a7e9d64d556cdf3898479f5255649f57cb57e0f2699040d6106008301527f21597115923f0c9a7a7adf417f1c48d77a6dc79843767f91060d4ed2a250a18c610620830152600061064083015260006106608301527f260e01b251f6f1c7e7ff4e580791dee8ea51d87a358e038b4efe30fac09383c16106808301527f0118c4d5b837bcc2bc89b5b398b5974e9f5944073b32078b7e231fec938883b06106a08301527f04fc6369f7110fe3d25156c1bb9a72859cf2a04641f99ba4ee413c80da6a5fe46106c08301527f22febda3c0c0632a56475b4214e5615e11e6dd3f96e6cea2854a87d4dacc5e556106e08301527f1af864d211b88d9ccf2e371c2ba088d9269d3fdea04e05acb6f70f8dc79e0e5781525050565b612b5b8282612327565b5050565b60008060008060408587031215612b7557600080fd5b843567ffffffffffffffff80821115612b8d57600080fd5b818701915087601f830112612ba157600080fd5b813581811115612bb057600080fd5b886020828501011115612bc257600080fd5b602092830196509450908601359080821115612bdd57600080fd5b818701915087601f830112612bf157600080fd5b813581811115612c0057600080fd5b8860208260051b8501011115612c1557600080fd5b9598949750506020019450505056fea2646970667358221220694ec3fc041edf15f45761446d65edb6f0ffc1fa85ea38e606a1505e289ae30f64736f6c63430008090033";

type UltraVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UltraVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UltraVerifier__factory extends ContractFactory {
  constructor(...args: UltraVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UltraVerifier";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UltraVerifier> {
    return super.deploy(overrides || {}) as Promise<UltraVerifier>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UltraVerifier {
    return super.attach(address) as UltraVerifier;
  }
  connect(signer: Signer): UltraVerifier__factory {
    return super.connect(signer) as UltraVerifier__factory;
  }
  static readonly contractName: "UltraVerifier";
  public readonly contractName: "UltraVerifier";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UltraVerifierInterface {
    return new utils.Interface(_abi) as UltraVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UltraVerifier {
    return new Contract(address, _abi, signerOrProvider) as UltraVerifier;
  }
}
