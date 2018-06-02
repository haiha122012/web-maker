import { h, Component } from 'preact';

export default class Header extends Component {
	render() {
		return (
			<div class="main-header">
				<input
					type="text"
					id="titleInput"
					title="Click to edit"
					class="item-title-input"
					value={this.props.title}
					onBlur={this.props.titleInputBlurHandler}
				/>
				<div class="main-header__btn-wrap  flex  flex-v-center">
					<a
						id="runBtn"
						class="hide flex flex-v-center hint--rounded hint--bottom-left"
						aria-label="Run preview (Ctrl/⌘ + Shift + 5)"
						d-click="onRunBtnClick"
					>
						<svg style="width: 14px; height: 14px;">
							<use xlinkHref="#play-icon" />
						</svg>Run
					</a>

					<a
						onClick={this.props.addLibraryBtnHandler}
						data-event-category="ui"
						data-event-action="addLibraryButtonClick"
						class="flex-v-center hint--rounded hint--bottom-left"
						aria-label="Add a JS/CSS library"
					>
						Add library
						<span
							id="js-external-lib-count"
							style={`display:${
								this.props.externalLibCount ? 'inline' : 'none'
							}`}
							class="count-label"
						>
							{this.props.externalLibCount}
						</span>
					</a>

					<a
						class="flex  flex-v-center hint--rounded hint--bottom-left"
						aria-label="Start a new creation"
						onClick={this.props.newBtnHandler}
					>
						<svg
							style="vertical-align:middle;width:14px;height:14px"
							viewBox="0 0 24 24"
						>
							<path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
						</svg>New
					</a>
					<a
						id="saveBtn"
						class={`flex  flex-v-center hint--rounded hint--bottom-left ${
							this.props.isSaving ? 'is-loading' : ''
						} ${this.props.unsavedEditCount ? 'is-marked' : 0}`}
						aria-label="Save current creation (Ctrl/⌘ + S)"
						onClick={this.props.saveBtnHandler}
					>
						<svg
							style="vertical-align:middle;width:14px;height:14px"
							viewBox="0 0 24 24"
						>
							<path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />
						</svg>
						<svg class="btn-loader" width="15" height="15" stroke="#fff">
							<use xlinkHref="#loader-icon" />
						</svg>
						Save
					</a>
					<a
						id="openItemsBtn"
						class={`flex  flex-v-center hint--rounded hint--bottom-left ${
							this.props.isFetchingItems ? 'is-loading' : ''
						}`}
						aria-label="Open a saved creation (Ctrl/⌘ + O)"
						onClick={this.props.openBtnHandler}
					>
						<svg
							style="width:14px;height:14px;vertical-align:middle;"
							viewBox="0 0 24 24"
						>
							<path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
						</svg>
						<svg class="btn-loader" width="15" height="15" stroke="#fff">
							<use xlinkHref="#loader-icon" />
						</svg>
						Open
					</a>
					<a
						onClick={this.props.loginBtnHandler}
						data-event-category="ui"
						data-event-action="loginButtonClick"
						class="hide-on-login flex  flex-v-center  hint--rounded  hint--bottom-left"
						aria-label="Login/Signup"
					>
						Login/Signup
					</a>
					<a
						onClick={this.props.profileBtnHandler}
						data-event-category="ui"
						data-event-action="headerAvatarClick"
						aria-label="See profile or Logout"
						class="hide-on-logout hint--rounded  hint--bottom-left"
					>
						<img
							id="headerAvatarImg"
							width="20"
							src={
								this.props.user
									? this.props.user.photoURL || DEFAULT_PROFILE_IMG
									: ''
							}
							class="main-header__avatar-img"
						/>
					</a>
				</div>
			</div>
		);
	}
}
