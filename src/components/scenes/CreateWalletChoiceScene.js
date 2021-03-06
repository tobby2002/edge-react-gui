// @flow

import React, { PureComponent } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import WalletIcon from '../../assets/images/createWallet/wallet_icon_lg.png'
import * as Constants from '../../constants/indexConstants'
import s from '../../locales/strings.js'
import { PrimaryButton } from '../../modules/UI/components/Buttons/PrimaryButton.ui.js'
import { SecondaryButton } from '../../modules/UI/components/Buttons/SecondaryButton.ui.js'
import Text from '../../modules/UI/components/FormattedText/FormattedText.ui.js'
import Gradient from '../../modules/UI/components/Gradient/Gradient.ui'
import SafeAreaView from '../../modules/UI/components/SafeAreaView/SafeAreaView.ui.js'
import styles from '../../styles/scenes/CreateWalletStyle.js'
import { type GuiWalletType } from '../../types/types.js'

type CreateWalletChoiceProps = {
  selectedWalletType: GuiWalletType
}

export class CreateWalletChoiceComponent extends PureComponent<CreateWalletChoiceProps> {
  onSelectNew = () => {
    const { selectedWalletType } = this.props
    Actions[Constants.CREATE_WALLET_SELECT_FIAT]({ selectedWalletType })
  }

  onSelectRestore = () => {
    const { selectedWalletType } = this.props
    Actions[Constants.CREATE_WALLET_IMPORT]({ selectedWalletType })
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.scene}>
          <Gradient style={styles.gradient} />
          <ScrollView>
            <View style={styles.view}>
              <Image source={WalletIcon} style={styles.currencyLogo} resizeMode="cover" />
              <View style={styles.createWalletPromptArea}>
                <Text style={styles.instructionalText}>{s.strings.create_wallet_choice_instructions}</Text>
              </View>
              <View style={styles.buttons}>
                <PrimaryButton style={styles.next} onPress={this.onSelectNew}>
                  <PrimaryButton.Text>{s.strings.create_wallet_choice_new_button}</PrimaryButton.Text>
                </PrimaryButton>
              </View>
              <View style={styles.buttons}>
                <SecondaryButton style={styles.next} onPress={this.onSelectRestore}>
                  <SecondaryButton.Text>{s.strings.create_wallet_import_title}</SecondaryButton.Text>
                </SecondaryButton>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}
