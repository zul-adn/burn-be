'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">burn-be documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-b157eb3796de5605fb44b2d28520e42f7c08b9644242f51e85dcc0eb93c94a3dd2b2c118607126316efbb49fe6b0448c6782915bab7625f0e303dbe897407687"' : 'data-bs-target="#xs-controllers-links-module-AppModule-b157eb3796de5605fb44b2d28520e42f7c08b9644242f51e85dcc0eb93c94a3dd2b2c118607126316efbb49fe6b0448c6782915bab7625f0e303dbe897407687"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-b157eb3796de5605fb44b2d28520e42f7c08b9644242f51e85dcc0eb93c94a3dd2b2c118607126316efbb49fe6b0448c6782915bab7625f0e303dbe897407687"' :
                                            'id="xs-controllers-links-module-AppModule-b157eb3796de5605fb44b2d28520e42f7c08b9644242f51e85dcc0eb93c94a3dd2b2c118607126316efbb49fe6b0448c6782915bab7625f0e303dbe897407687"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-b157eb3796de5605fb44b2d28520e42f7c08b9644242f51e85dcc0eb93c94a3dd2b2c118607126316efbb49fe6b0448c6782915bab7625f0e303dbe897407687"' : 'data-bs-target="#xs-injectables-links-module-AppModule-b157eb3796de5605fb44b2d28520e42f7c08b9644242f51e85dcc0eb93c94a3dd2b2c118607126316efbb49fe6b0448c6782915bab7625f0e303dbe897407687"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-b157eb3796de5605fb44b2d28520e42f7c08b9644242f51e85dcc0eb93c94a3dd2b2c118607126316efbb49fe6b0448c6782915bab7625f0e303dbe897407687"' :
                                        'id="xs-injectables-links-module-AppModule-b157eb3796de5605fb44b2d28520e42f7c08b9644242f51e85dcc0eb93c94a3dd2b2c118607126316efbb49fe6b0448c6782915bab7625f0e303dbe897407687"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-42d1b6356586023393e6a2decbf4b7daca04b72ab697d12049beac5142c7f06bce3cab4950c12582b4daa5229e6841efd70584376fef51abcf5179a0dd4e0274"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-42d1b6356586023393e6a2decbf4b7daca04b72ab697d12049beac5142c7f06bce3cab4950c12582b4daa5229e6841efd70584376fef51abcf5179a0dd4e0274"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-42d1b6356586023393e6a2decbf4b7daca04b72ab697d12049beac5142c7f06bce3cab4950c12582b4daa5229e6841efd70584376fef51abcf5179a0dd4e0274"' :
                                            'id="xs-controllers-links-module-AuthModule-42d1b6356586023393e6a2decbf4b7daca04b72ab697d12049beac5142c7f06bce3cab4950c12582b4daa5229e6841efd70584376fef51abcf5179a0dd4e0274"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-42d1b6356586023393e6a2decbf4b7daca04b72ab697d12049beac5142c7f06bce3cab4950c12582b4daa5229e6841efd70584376fef51abcf5179a0dd4e0274"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-42d1b6356586023393e6a2decbf4b7daca04b72ab697d12049beac5142c7f06bce3cab4950c12582b4daa5229e6841efd70584376fef51abcf5179a0dd4e0274"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-42d1b6356586023393e6a2decbf4b7daca04b72ab697d12049beac5142c7f06bce3cab4950c12582b4daa5229e6841efd70584376fef51abcf5179a0dd4e0274"' :
                                        'id="xs-injectables-links-module-AuthModule-42d1b6356586023393e6a2decbf4b7daca04b72ab697d12049beac5142c7f06bce3cab4950c12582b4daa5229e6841efd70584376fef51abcf5179a0dd4e0274"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthRecordsModule.html" data-type="entity-link" >HealthRecordsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthRecordsModule-45c8d169e1194e3f4915cb05c0b6f4a850f522ae3c0c2b76c84c4f95fafeee2edd89e85f33477d05514bef3251da2e15d4a17fc7829067e36788cea349f51567"' : 'data-bs-target="#xs-controllers-links-module-HealthRecordsModule-45c8d169e1194e3f4915cb05c0b6f4a850f522ae3c0c2b76c84c4f95fafeee2edd89e85f33477d05514bef3251da2e15d4a17fc7829067e36788cea349f51567"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthRecordsModule-45c8d169e1194e3f4915cb05c0b6f4a850f522ae3c0c2b76c84c4f95fafeee2edd89e85f33477d05514bef3251da2e15d4a17fc7829067e36788cea349f51567"' :
                                            'id="xs-controllers-links-module-HealthRecordsModule-45c8d169e1194e3f4915cb05c0b6f4a850f522ae3c0c2b76c84c4f95fafeee2edd89e85f33477d05514bef3251da2e15d4a17fc7829067e36788cea349f51567"' }>
                                            <li class="link">
                                                <a href="controllers/HealthRecordsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthRecordsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HealthRecordsModule-45c8d169e1194e3f4915cb05c0b6f4a850f522ae3c0c2b76c84c4f95fafeee2edd89e85f33477d05514bef3251da2e15d4a17fc7829067e36788cea349f51567"' : 'data-bs-target="#xs-injectables-links-module-HealthRecordsModule-45c8d169e1194e3f4915cb05c0b6f4a850f522ae3c0c2b76c84c4f95fafeee2edd89e85f33477d05514bef3251da2e15d4a17fc7829067e36788cea349f51567"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HealthRecordsModule-45c8d169e1194e3f4915cb05c0b6f4a850f522ae3c0c2b76c84c4f95fafeee2edd89e85f33477d05514bef3251da2e15d4a17fc7829067e36788cea349f51567"' :
                                        'id="xs-injectables-links-module-HealthRecordsModule-45c8d169e1194e3f4915cb05c0b6f4a850f522ae3c0c2b76c84c4f95fafeee2edd89e85f33477d05514bef3251da2e15d4a17fc7829067e36788cea349f51567"' }>
                                        <li class="link">
                                            <a href="injectables/HealthRecordsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthRecordsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MasterServicesModule.html" data-type="entity-link" >MasterServicesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MasterServicesModule-c26b7e10314e7cf2a11da9aba3f6e797029d18062026d6abb4f8e455107122a18a26b28482e598b09ac597c12cbdaa79bfb142d40fc82cad9c37f10903228e1a"' : 'data-bs-target="#xs-controllers-links-module-MasterServicesModule-c26b7e10314e7cf2a11da9aba3f6e797029d18062026d6abb4f8e455107122a18a26b28482e598b09ac597c12cbdaa79bfb142d40fc82cad9c37f10903228e1a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MasterServicesModule-c26b7e10314e7cf2a11da9aba3f6e797029d18062026d6abb4f8e455107122a18a26b28482e598b09ac597c12cbdaa79bfb142d40fc82cad9c37f10903228e1a"' :
                                            'id="xs-controllers-links-module-MasterServicesModule-c26b7e10314e7cf2a11da9aba3f6e797029d18062026d6abb4f8e455107122a18a26b28482e598b09ac597c12cbdaa79bfb142d40fc82cad9c37f10903228e1a"' }>
                                            <li class="link">
                                                <a href="controllers/MasterServicesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MasterServicesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MasterServicesModule-c26b7e10314e7cf2a11da9aba3f6e797029d18062026d6abb4f8e455107122a18a26b28482e598b09ac597c12cbdaa79bfb142d40fc82cad9c37f10903228e1a"' : 'data-bs-target="#xs-injectables-links-module-MasterServicesModule-c26b7e10314e7cf2a11da9aba3f6e797029d18062026d6abb4f8e455107122a18a26b28482e598b09ac597c12cbdaa79bfb142d40fc82cad9c37f10903228e1a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MasterServicesModule-c26b7e10314e7cf2a11da9aba3f6e797029d18062026d6abb4f8e455107122a18a26b28482e598b09ac597c12cbdaa79bfb142d40fc82cad9c37f10903228e1a"' :
                                        'id="xs-injectables-links-module-MasterServicesModule-c26b7e10314e7cf2a11da9aba3f6e797029d18062026d6abb4f8e455107122a18a26b28482e598b09ac597c12cbdaa79bfb142d40fc82cad9c37f10903228e1a"' }>
                                        <li class="link">
                                            <a href="injectables/MasterServicesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MasterServicesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-16d7881c70a6d0379a29cc2da0336d99300e59219640a178d007296d69ae097f5e568b79abc2cc226f0081b7043637e7a2eb2b31bd6ad032485fe309192febdb"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-16d7881c70a6d0379a29cc2da0336d99300e59219640a178d007296d69ae097f5e568b79abc2cc226f0081b7043637e7a2eb2b31bd6ad032485fe309192febdb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-16d7881c70a6d0379a29cc2da0336d99300e59219640a178d007296d69ae097f5e568b79abc2cc226f0081b7043637e7a2eb2b31bd6ad032485fe309192febdb"' :
                                            'id="xs-controllers-links-module-UsersModule-16d7881c70a6d0379a29cc2da0336d99300e59219640a178d007296d69ae097f5e568b79abc2cc226f0081b7043637e7a2eb2b31bd6ad032485fe309192febdb"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-16d7881c70a6d0379a29cc2da0336d99300e59219640a178d007296d69ae097f5e568b79abc2cc226f0081b7043637e7a2eb2b31bd6ad032485fe309192febdb"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-16d7881c70a6d0379a29cc2da0336d99300e59219640a178d007296d69ae097f5e568b79abc2cc226f0081b7043637e7a2eb2b31bd6ad032485fe309192febdb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-16d7881c70a6d0379a29cc2da0336d99300e59219640a178d007296d69ae097f5e568b79abc2cc226f0081b7043637e7a2eb2b31bd6ad032485fe309192febdb"' :
                                        'id="xs-injectables-links-module-UsersModule-16d7881c70a6d0379a29cc2da0336d99300e59219640a178d007296d69ae097f5e568b79abc2cc226f0081b7043637e7a2eb2b31bd6ad032485fe309192febdb"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthRecordsController.html" data-type="entity-link" >HealthRecordsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MasterServicesController.html" data-type="entity-link" >MasterServicesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthLoginDto.html" data-type="entity-link" >AuthLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateHealthRecordDto.html" data-type="entity-link" >CreateHealthRecordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMasterServiceDto.html" data-type="entity-link" >CreateMasterServiceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthRecord.html" data-type="entity-link" >HealthRecord</a>
                            </li>
                            <li class="link">
                                <a href="classes/MasterService.html" data-type="entity-link" >MasterService</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHealthRecordDto.html" data-type="entity-link" >UpdateHealthRecordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMasterServiceDto.html" data-type="entity-link" >UpdateMasterServiceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HealthRecordsService.html" data-type="entity-link" >HealthRecordsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MasterServicesService.html" data-type="entity-link" >MasterServicesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PassportJwtAuthGuard.html" data-type="entity-link" >PassportJwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PassportLocalGuard.html" data-type="entity-link" >PassportLocalGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});