import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PC, Mobile } from 'components/04_Templates/MediaQuery/MediaQuery';
// import { SrOnly } from 'styles/Globals';

const ClassInfoWrap = () => {
	// const [controlledSwiper, setControlledSwiper] = useState(null);
	return (
		<>
			<PC>
				<section css={pcSectionStyle}>
					<h2>클래스 안내</h2>
					<div>
						클래스 정보 9개 챕터, 35개 세부강의 바로 수강 가능 자막
						포함 여부 포함
					</div>
					<h3>
						수익형 블로그 만들기, 블로그 제작 방법, 애드센스 사용법
						클래스입니다.
					</h3>
					<div>
						'2022년 NEW 블로그 로직'을 반영한 독보적인 강의 최신
						로직을 반영한 강의는 한국에서 'OOO'가 독보적입니다.
						수강생 '실시간 수익'을 그대로 보여주는 곳은 OOO가
						유일합니다. 그 결과, 1,700개 후기 • 평가 5.0 만점을 받는
						TOP3 레전드 강의가 되었습니다.
					</div>
					<h3>
						이거 설마 당신 이야기?
						<br /> 투잡 초보에게 질문 드립니다.
					</h3>
					<div>
						<ul>
							<li>- 월급이 적어 힘드신가요?</li>
							<li>- 육아맘도 할 수 있는 투잡 찾으시나요?</li>
							<li>
								- 다른 투잡해봐도 수익이 마음에 들지 않았나요?
							</li>
							<li>- 진짜 수익이 나는 검증된 투잡 찾고 있나요?</li>
							<li>
								- 투잡 강의가 많아서 뭘 해야할지 고민되시나요?
							</li>
						</ul>
					</div>
					<h3>
						그렇다면 당신에게 진짜 수익을 만드는 두 번째 직업,
						수익형 블로그를 추천 드립니다.
					</h3>
					<div>
						<p>
							안녕하세요! 수익형 블로그를 운영하는 OOO 입니다. 제
							첫 월급은 70만원이었습니다.
						</p>
						<p>
							아내에게 선물하나 하기 어려워 장미 한 송이 5천원도
							덜덜 떨면서 사는 제 모습이 너무 싫었습니다. 살까
							말까 고민한 장미 받고, 환하게 웃어주는 아내 보니까
							너무 미안해서 눈물이 나더군요.
						</p>
						<p>
							100만원 안 되는 월급으로 하루 하루를 버티며 살다 더
							이상 이렇게 살면 안 되겠다고 생각했어요.
						</p>
						<p>
							그 때부터 독학으로 애드센스 블로그를 운영하는 법을
							공부하기 시작했어요. 그리고 지금 현재, 저는 블로그로
							월 1,000만원 이상의 수익을 만들고 있어요.
						</p>
						<p>
							자본금 0원으로 평생 월 100만원 자동수익을 만드는 일,
							아직 믿기지 않으시겠지요? 하지만 여러분도 하실 수
							있습니다. 이미 저와 함께 시작한 수많은 분들의 후기를
							만나보세요.
						</p>
					</div>
					<div></div>
				</section>
			</PC>
			<Mobile>
				<section css={moSectionStyle}>
					<h2>수업정보</h2>
				</section>
			</Mobile>
		</>
	);
};

const pcSectionStyle = css``;
const moSectionStyle = css``;

export default ClassInfoWrap;
