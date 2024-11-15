// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wmMNwaiAXtvy8CTnCEVgny
// Component: aor5HAE43dpw

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: UuOts2M_rB8T/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: wmMNwaiAXtvy8CTnCEVgny/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: aor5HAE43dpw/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: 2pKKmez1EHDZ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: ZESnzX4ycVmA/icon
import lampJpgQXgxDacqm5S from "./images/lampJpg.jpg"; // plasmic-import: QXgxDACQM_5S/picture
import l2Jpg26BF3NaEuby from "./images/l2Jpg.jpg"; // plasmic-import: 26bF3naEuby-/picture
import l1Jpg8XQnkt2CzHx3 from "./images/l1Jpg.jpg"; // plasmic-import: 8XQnkt2czHX3/picture
import l4Jpg8THDte3Xtupr from "./images/l4Jpg.jpg"; // plasmic-import: 8tHDte3xtupr/picture
import l3JpgQosJfR5KrdPk from "./images/l3Jpg.jpg"; // plasmic-import: QOSJfR5krdPK/picture
import hangJpgRkVco0WCptlX from "./images/hangJpg.jpg"; // plasmic-import: RkVco0WCptlX/picture
import sofaPngP5Ykw8WbxgBr from "./images/sofaPng.png"; // plasmic-import: P5ykw8wbxgBr/picture
import _5JpgBZjDmUjWdIc from "./images/_5Jpg.jpg"; // plasmic-import: BZjDMUjWD-ic/picture
import ch3JpgLMhFjLSzbRNu from "./images/ch3Jpg.jpg"; // plasmic-import: lMHFjLSzbRNu/picture

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<"div">;
  navbarLeft?: Flex__<"div">;
  navbarRight?: Flex__<"div">;
  خانه?: Flex__<"a">;
  up?: Flex__<"div">;
  leftUp?: Flex__<"section">;
  rightUp?: Flex__<"section">;
  down?: Flex__<"div">;
  downLeft?: Flex__<"section">;
  downRight?: Flex__<"section">;
  up2?: Flex__<"div">;
  rightUp2?: Flex__<"section">;
  leftUp2?: Flex__<"section">;
  down2?: Flex__<"div">;
  downRight2?: Flex__<"section">;
  downLeft2?: Flex__<"section">;
};

export interface DefaultHomepageProps {
  className?: string;
}

const $$ = {};

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames(projectcss.all, sty.navbar)}
          >
            <div
              data-plasmic-name={"navbarLeft"}
              data-plasmic-override={overrides.navbarLeft}
              className={classNames(projectcss.all, sty.navbarLeft)}
            >
              <Button
                className={classNames("__wab_instance", sty.button__xTExE)}
              />

              <Button
                className={classNames("__wab_instance", sty.button__ca9Y0)}
              />

              <Button
                className={classNames("__wab_instance", sty.button__co0)}
              />
            </div>
            <div
              data-plasmic-name={"navbarRight"}
              data-plasmic-override={overrides.navbarRight}
              className={classNames(projectcss.all, sty.navbarRight)}
            >
              <PlasmicLink__
                data-plasmic-name={"\u062e\u0627\u0646\u0647"}
                data-plasmic-override={overrides.خانه}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.خانه
                )}
                href={"https://www.plasmic.app/"}
                platform={"react"}
              >
                {"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0627"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___8BX90
                )}
                href={"https://www.plasmic.app/"}
                platform={"react"}
              >
                {
                  "\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627"
                }
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__ncohm
                )}
                href={"https://www.plasmic.app/"}
                platform={"react"}
              >
                {
                  "\u062c\u062f\u06cc\u062f\u062a\u0631\u06cc\u0646 \u0647\u0627"
                }
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__gSy1I
                )}
                href={"https://www.plasmic.app/"}
                platform={"react"}
              >
                {"\u0622\u0631\u0634\u06cc\u0648"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__vg4Jp
                )}
                href={"https://www.plasmic.app/"}
                platform={"react"}
              >
                {"\u062e\u0627\u0646\u0647"}
              </PlasmicLink__>
            </div>
          </div>
          <section className={classNames(projectcss.all, sty.section__tPsmn)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__eYj0N
              )}
            >
              {
                "\u0645\u062c\u0645\u0648\u0639\u0647 \u0645\u0628\u0644\u0645\u0627\u0646\n\u0645\u062f\u0631\u0646 \u0645\u0628\u0644"
              }
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__rLcN)}>
            <div
              data-plasmic-name={"up"}
              data-plasmic-override={overrides.up}
              className={classNames(projectcss.all, sty.up)}
            >
              <section
                data-plasmic-name={"leftUp"}
                data-plasmic-override={overrides.leftUp}
                className={classNames(projectcss.all, sty.leftUp)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___387Y
                  )}
                >
                  {
                    "\u0644\u0627\u0645\u067e \u0622\u0648\u06cc\u0632\n\u0622\u0631\u0634\u06cc\u0648 \u0644\u0627\u0645\u067e \u0647\u0627\u06cc \u0622\u0648\u06cc\u0632"
                  }
                </div>
              </section>
              <section
                data-plasmic-name={"rightUp"}
                data-plasmic-override={overrides.rightUp}
                className={classNames(projectcss.all, sty.rightUp)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__t4FHb)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__d44W)}
                    displayHeight={"200px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"300px"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"400px"}
                    loading={"lazy"}
                    src={{
                      src: lampJpgQXgxDacqm5S,
                      fullWidth: 1000,
                      fullHeight: 800,
                      aspectRatio: undefined
                    }}
                  />

                  <section
                    className={classNames(projectcss.all, sty.section__zrw1Q)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__iyg1B
                      )}
                    >
                      {
                        "\u0644\u0627\u0645\u067e \u0645\u062f\u0644 \u0622\u0648\u06cc\u0632"
                      }
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__x6PkX
                      )}
                    >
                      {
                        "\u0634\u0645\u0627 \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0627 \u0627\u06cc\u0646 \u0644\u0627\u0645\u067e \u0647\u0627\u06cc \u0622\u0648\u06cc\u0632\u0627\u0646 \u0628\u0647 \u062e\u0627\u0646\u0647\u06cc \u062e\u0648\u062f \u0632\u06cc\u0628\u0627\u06cc\u06cc \u0648 \u062c\u0644\u0648\u0647 \u06cc \u0641\u0648\u0642 \u0627\u0644\u0639\u0627\u062f\u0647 \u0627\u06cc \u0628\u06af\u0630\u0627\u0631\u06cc\u062f"
                      }
                    </div>
                  </section>
                </div>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__yKzTd
                  )}
                  href={"https://www.plasmic.app/"}
                  platform={"react"}
                >
                  {"\u0645\u06cc\u062e\u0631\u0645\u0634"}
                </PlasmicLink__>
              </section>
            </div>
            <div
              data-plasmic-name={"down"}
              data-plasmic-override={overrides.down}
              className={classNames(projectcss.all, sty.down)}
            >
              <section
                data-plasmic-name={"downLeft"}
                data-plasmic-override={overrides.downLeft}
                className={classNames(projectcss.all, sty.downLeft)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__bgPL)}>
                  <section
                    className={classNames(projectcss.all, sty.section__g9NGg)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__sJFxj)}
                      displayHeight={"28vh"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"200px"}
                      loading={"lazy"}
                      src={{
                        src: l2Jpg26BF3NaEuby,
                        fullWidth: 642,
                        fullHeight: 1080,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qPwNd
                      )}
                    >
                      {
                        "\u0642\u06cc\u0645\u062a \u0645\u062d\u0635\u0648\u0644\n200$"
                      }
                    </div>
                  </section>
                  <section
                    className={classNames(projectcss.all, sty.section___97WkN)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__wUrag)}
                      displayHeight={"28vh"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"200px"}
                      loading={"lazy"}
                      src={{
                        src: l1Jpg8XQnkt2CzHx3,
                        fullWidth: 500,
                        fullHeight: 500,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nWqqs
                      )}
                    >
                      {
                        "\u0642\u06cc\u0645\u062a \u0645\u062d\u0635\u0648\u0644\n200$"
                      }
                    </div>
                  </section>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox___8Fyy)}>
                  <section
                    className={classNames(projectcss.all, sty.section__suPWw)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__s5ZQ4)}
                      displayHeight={"28vh"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"200px"}
                      loading={"lazy"}
                      src={{
                        src: l4Jpg8THDte3Xtupr,
                        fullWidth: 800,
                        fullHeight: 800,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hReiu
                      )}
                    >
                      {
                        "\u0642\u06cc\u0645\u062a \u0645\u062d\u0635\u0648\u0644\n200$"
                      }
                    </div>
                  </section>
                  <section
                    className={classNames(projectcss.all, sty.section___4Kji)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___4UTcQ)}
                      displayHeight={"28vh"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"200px"}
                      loading={"lazy"}
                      src={{
                        src: l3JpgQosJfR5KrdPk,
                        fullWidth: 1000,
                        fullHeight: 800,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lMP
                      )}
                    >
                      {
                        "\u0642\u06cc\u0645\u062a \u0645\u062d\u0635\u0648\u0644\n200$"
                      }
                    </div>
                  </section>
                </div>
              </section>
              <section
                data-plasmic-name={"downRight"}
                data-plasmic-override={overrides.downRight}
                className={classNames(projectcss.all, sty.downRight)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___5BrLv)}
                  displayHeight={"70vh"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: hangJpgRkVco0WCptlX,
                    fullWidth: 990,
                    fullHeight: 658,
                    aspectRatio: undefined
                  }}
                />
              </section>
            </div>
          </section>
          <div
            data-plasmic-name={"up2"}
            data-plasmic-override={overrides.up2}
            className={classNames(projectcss.all, sty.up2)}
          >
            <section
              data-plasmic-name={"rightUp2"}
              data-plasmic-override={overrides.rightUp2}
              className={classNames(projectcss.all, sty.rightUp2)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__dze2O)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___3KyFi)}
                  displayHeight={"200px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"300px"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"400px"}
                  loading={"lazy"}
                  src={{
                    src: sofaPngP5Ykw8WbxgBr,
                    fullWidth: 300,
                    fullHeight: 271,
                    aspectRatio: undefined
                  }}
                />

                <section
                  className={classNames(projectcss.all, sty.section___0NHW)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wYRbB
                    )}
                  >
                    {"\u0645\u0628\u0644 \u0631\u0627\u062d\u062a\u06cc"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__c0G1Y
                    )}
                  >
                    {
                      "\u0634\u0645\u0627 \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0628\u0644\u0645\u0627\u0646 \u0628\u0647 \u062e\u0627\u0646\u0647\u06cc \u062e\u0648\u062f \u0632\u06cc\u0628\u0627\u06cc\u06cc \u0648 \u062c\u0644\u0648\u0647 \u06cc \u0641\u0648\u0642 \u0627\u0644\u0639\u0627\u062f\u0647 \u0627\u06cc \u0628\u06af\u0630\u0627\u0631\u06cc\u062f"
                    }
                  </div>
                </section>
              </div>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___6008T
                )}
                href={"https://www.plasmic.app/"}
                platform={"react"}
              >
                {"\u0645\u06cc\u062e\u0631\u0645\u0634"}
              </PlasmicLink__>
            </section>
            <section
              data-plasmic-name={"leftUp2"}
              data-plasmic-override={overrides.leftUp2}
              className={classNames(projectcss.all, sty.leftUp2)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fxeLs
                )}
              >
                {
                  "\u0645\u0628\u0644\u0645\u0627\u0646\n\u0622\u0631\u0634\u06cc\u0648 \u0645\u0628\u0644 \u0648 \u0635\u0646\u062f\u0644\u06cc"
                }
              </div>
            </section>
          </div>
          <div
            data-plasmic-name={"down2"}
            data-plasmic-override={overrides.down2}
            className={classNames(projectcss.all, sty.down2)}
          >
            <section
              data-plasmic-name={"downRight2"}
              data-plasmic-override={overrides.downRight2}
              className={classNames(projectcss.all, sty.downRight2)}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___4UUnt)}
                displayHeight={"70vh"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"100%"}
                loading={"lazy"}
                src={{
                  src: _5JpgBZjDmUjWdIc,
                  fullWidth: 840,
                  fullHeight: 580,
                  aspectRatio: undefined
                }}
              />
            </section>
            <section
              data-plasmic-name={"downLeft2"}
              data-plasmic-override={overrides.downLeft2}
              className={classNames(projectcss.all, sty.downLeft2)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__cag2G)}>
                <section
                  className={classNames(projectcss.all, sty.section___9JiPk)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__dAr9E)}
                    displayHeight={"28vh"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"200px"}
                    loading={"lazy"}
                    src={{
                      src: ch3JpgLMhFjLSzbRNu,
                      fullWidth: 2000,
                      fullHeight: 2000,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pp41T
                    )}
                  >
                    {
                      "\u0642\u06cc\u0645\u062a \u0645\u062d\u0635\u0648\u0644\n200$"
                    }
                  </div>
                </section>
                <section
                  className={classNames(projectcss.all, sty.section__pBdG5)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__fmxeZ)}
                    displayHeight={"28vh"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"200px"}
                    loading={"lazy"}
                    src={{
                      src: ch3JpgLMhFjLSzbRNu,
                      fullWidth: 2000,
                      fullHeight: 2000,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yHeqB
                    )}
                  >
                    {
                      "\u0642\u06cc\u0645\u062a \u0645\u062d\u0635\u0648\u0644\n200$"
                    }
                  </div>
                </section>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__aRdRm)}>
                <section
                  className={classNames(projectcss.all, sty.section__vEyxj)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__gPenE)}
                    displayHeight={"28vh"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"200px"}
                    loading={"lazy"}
                    src={{
                      src: ch3JpgLMhFjLSzbRNu,
                      fullWidth: 2000,
                      fullHeight: 2000,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8SD1A
                    )}
                  >
                    {
                      "\u0642\u06cc\u0645\u062a \u0645\u062d\u0635\u0648\u0644\n200$"
                    }
                  </div>
                </section>
                <section
                  className={classNames(projectcss.all, sty.section__wjG6)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__laIm)}
                    displayHeight={"28vh"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"200px"}
                    loading={"lazy"}
                    src={{
                      src: ch3JpgLMhFjLSzbRNu,
                      fullWidth: 2000,
                      fullHeight: 2000,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qGnk
                    )}
                  >
                    {
                      "\u0642\u06cc\u0645\u062a \u0645\u062d\u0635\u0648\u0644\n200$"
                    }
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "navbarLeft",
    "navbarRight",
    "\u062e\u0627\u0646\u0647",
    "up",
    "leftUp",
    "rightUp",
    "down",
    "downLeft",
    "downRight",
    "up2",
    "rightUp2",
    "leftUp2",
    "down2",
    "downRight2",
    "downLeft2"
  ],
  navbar: ["navbar", "navbarLeft", "navbarRight", "\u062e\u0627\u0646\u0647"],
  navbarLeft: ["navbarLeft"],
  navbarRight: ["navbarRight", "\u062e\u0627\u0646\u0647"],
  خانه: ["\u062e\u0627\u0646\u0647"],
  up: ["up", "leftUp", "rightUp"],
  leftUp: ["leftUp"],
  rightUp: ["rightUp"],
  down: ["down", "downLeft", "downRight"],
  downLeft: ["downLeft"],
  downRight: ["downRight"],
  up2: ["up2", "rightUp2", "leftUp2"],
  rightUp2: ["rightUp2"],
  leftUp2: ["leftUp2"],
  down2: ["down2", "downRight2", "downLeft2"],
  downRight2: ["downRight2"],
  downLeft2: ["downLeft2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: "div";
  navbarLeft: "div";
  navbarRight: "div";
  خانه: "a";
  up: "div";
  leftUp: "section";
  rightUp: "section";
  down: "div";
  downLeft: "section";
  downRight: "section";
  up2: "div";
  rightUp2: "section";
  leftUp2: "section";
  down2: "div";
  downRight2: "section";
  downLeft2: "section";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    navbarLeft: makeNodeComponent("navbarLeft"),
    navbarRight: makeNodeComponent("navbarRight"),
    خانه: makeNodeComponent("\u062e\u0627\u0646\u0647"),
    up: makeNodeComponent("up"),
    leftUp: makeNodeComponent("leftUp"),
    rightUp: makeNodeComponent("rightUp"),
    down: makeNodeComponent("down"),
    downLeft: makeNodeComponent("downLeft"),
    downRight: makeNodeComponent("downRight"),
    up2: makeNodeComponent("up2"),
    rightUp2: makeNodeComponent("rightUp2"),
    leftUp2: makeNodeComponent("leftUp2"),
    down2: makeNodeComponent("down2"),
    downRight2: makeNodeComponent("downRight2"),
    downLeft2: makeNodeComponent("downLeft2"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
