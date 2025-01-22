<template>
  <div class="flex flex-col h-screen">
    <TitleBar v-model="lang" class="w-full" />
    <div class="flex-1 overflow-auto myscrollbar p-5 bg-[var(--page-bg)]" @click="hiddenColorPicker">
      <div class="bg-white w-full  p-4 rounded-lg items-center text-[var(--primary)] dark:bg-[var(--card-bg)]">
        <div>
          <ServerList v-model="selectedServer" :title="i18n(i18nKey.selectServer,lang)" />
        </div>
        <div class="flex gap-2">
          <div class="w-1/2">
            <div>{{i18n(i18nKey.queryCommand,lang)}}：
              <div class="flex gap-2">
                <input v-model="command" type="text" :placeholder="i18n(i18nKey.enterCommand,lang)" list="suggestions" @keydown="handleKeyDown"
                  class="focus:outline-none px-2 py-1 rounded-lg text-[var(--btn-content)] bg-[var(--btn-regular-bg)]">
                  <FButton :content="i18n(i18nKey.query,lang)" @click="getServerinfo" class="my-1" />
              </div>
              <datalist v-if="command" id="suggestions">
                <option value="apikeyadd"></option>
                <option value="apikeydel"></option>
                <option value="apikeylist"></option>
                <option value="banadd"></option>
                <option value="banclient"></option>
                <option value="bandel"></option>
                <option value="bandelall"></option>
                <option value="banlist"></option>
                <option value="bindinglist"></option>
                <option value="channeladdperm"></option>
                <option value="channelclientaddperm"></option>
                <option value="channelclientdelperm"></option>
                <option value="channelclientpermlist"></option>
                <option value="channelcreate"></option>
                <option value="channeldelete"></option>
                <option value="channeldelperm"></option>
                <option value="channeledit"></option>
                <option value="channelfind"></option>
                <option value="channelgroupadd"></option>
                <option value="channelgroupaddperm"></option>
                <option value="channelgroupclientlist"></option>
                <option value="channelgroupcopy"></option>
                <option value="channelgroupdel"></option>
                <option value="channelgroupdelperm"></option>
                <option value="channelgrouplist"></option>
                <option value="channelgrouppermlist"></option>
                <option value="channelgrouprename"></option>
                <option value="channelinfo"></option>
                <option value="channellist"></option>
                <option value="channelmove"></option>
                <option value="channelpermlist"></option>
                <option value="clientaddperm"></option>
                <option value="clientdbdelete"></option>
                <option value="clientdbedit"></option>
                <option value="clientdbfind"></option>
                <option value="clientdbinfo"></option>
                <option value="clientdblist"></option>
                <option value="clientdelperm"></option>
                <option value="clientedit"></option>
                <option value="clientfind"></option>
                <option value="clientgetdbidfromuid"></option>
                <option value="clientgetids"></option>
                <option value="clientgetnamefromdbid"></option>
                <option value="clientgetnamefromuid"></option>
                <option value="clientgetuidfromclid"></option>
                <option value="clientinfo"></option>
                <option value="clientkick"></option>
                <option value="clientlist"></option>
                <option value="clientmove"></option>
                <option value="clientpermlist"></option>
                <option value="clientpoke"></option>
                <option value="clientsetserverquerylogin"></option>
                <option value="clientupdate"></option>
                <option value="complainadd"></option>
                <option value="complaindel"></option>
                <option value="complaindelall"></option>
                <option value="complainlist"></option>
                <option value="custominfo"></option>
                <option value="customsearch"></option>
                <option value="customset"></option>
                <option value="customdelete"></option>
                <option value="ftcreatedir"></option>
                <option value="ftdeletefile"></option>
                <option value="ftgetfileinfo"></option>
                <option value="ftgetfilelist"></option>
                <option value="ftinitdownload"></option>
                <option value="ftinitupload"></option>
                <option value="ftlist"></option>
                <option value="ftrenamefile"></option>
                <option value="ftstop"></option>
                <option value="gm"></option>
                <option value="help"></option>
                <option value="hostinfo"></option>
                <option value="instanceedit"></option>
                <option value="instanceinfo"></option>
                <option value="logadd"></option>
                <option value="login"></option>
                <option value="logout"></option>
                <option value="logview"></option>
                <option value="messageadd"></option>
                <option value="messagedel"></option>
                <option value="messageget"></option>
                <option value="messagelist"></option>
                <option value="messageupdateflag"></option>
                <option value="permfind"></option>
                <option value="permget"></option>
                <option value="permidgetbyname"></option>
                <option value="permissionlist"></option>
                <option value="permoverview"></option>
                <option value="permreset"></option>
                <option value="privilegekeyadd"></option>
                <option value="privilegekeydelete"></option>
                <option value="privilegekeylist"></option>
                <option value="privilegekeyuse"></option>
                <option value="queryloginadd"></option>
                <option value="querylogindel"></option>
                <option value="queryloginlist"></option>
                <option value="quit"></option>
                <option value="sendtextmessage"></option>
                <option value="servercreate"></option>
                <option value="serverdelete"></option>
                <option value="serveredit"></option>
                <option value="servergroupadd"></option>
                <option value="servergroupaddclient"></option>
                <option value="servergroupaddperm"></option>
                <option value="servergroupautoaddperm"></option>
                <option value="servergroupautodelperm"></option>
                <option value="servergroupclientlist"></option>
                <option value="servergroupcopy"></option>
                <option value="servergroupdel"></option>
                <option value="servergroupdelclient"></option>
                <option value="servergroupdelperm"></option>
                <option value="servergrouplist"></option>
                <option value="servergrouppermlist"></option>
                <option value="servergrouprename"></option>
                <option value="servergroupsbyclientid"></option>
                <option value="serveridgetbyport"></option>
                <option value="serverinfo"></option>
                <option value="serverlist"></option>
                <option value="servernotifyregister"></option>
                <option value="servernotifyunregister"></option>
                <option value="serverprocessstop"></option>
                <option value="serverrequestconnectioninfo"></option>
                <option value="serversnapshotcreate"></option>
                <option value="serversnapshotdeploy"></option>
                <option value="serverstart"></option>
                <option value="serverstop"></option>
                <option value="servertemppasswordadd"></option>
                <option value="servertemppassworddel"></option>
                <option value="servertemppasswordlist"></option>
                <option value="setclientchannelgroup"></option>
                <option value="tokenadd"></option>
                <option value="tokendelete"></option>
                <option value="tokenlist"></option>
                <option value="tokenuse"></option>
                <option value="use"></option>
                <option value="version"></option>
                <option value="whoami"></option>
              </datalist>
              <div>
              <JSONEdit v-model="jsonStr" :lang="lang" />
            </div>
            </div>
            <div v-if="Response">
<pre class="bg-black/75 dark:bg-black/25 p-2 rounded-lg overflow-auto myscrollbar">
<code>
{{JSON.stringify(Response,null,2).trim() }}
</code>
</pre>
            </div>
          </div>
          <div class="w-1/2 overflow-auto myscrollbar">
            <span v-if="!tutorial">{{ i18n(i18nKey.commandNotFound,lang) }}</span>
            <div v-html="tutorial"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { GetServerData } from '../wailsjs/go/main/App'
import type { ts3_webquery, utils } from '../wailsjs/go/models'
import FButton from './FKits/FButton.vue'
import JSONEdit from './FKits/JSONEdit.vue'
import ServerList from './components/ServerList.vue'
import TitleBar from './components/TitleBar.vue'
import i18nKey from './i18n/i18nKey'
import { i18n } from './i18n/translation'
import getHTML from './utils/Tutorial'
import { getLang } from './utils/getLang'

const lang = ref<string>(getLang())
const selectedServer = ref<utils.Server | null>(null)
const Response = ref<ts3_webquery.Response | null>(null)
const command = ref<string>('')
const jsonStr = ref<string>('')
const tutorial = ref<string>('')
watch(command, (newVal) => {
  tutorial.value = getHTML(newVal)
})

const getServerinfo = async () => {
  if (selectedServer.value) {
    Response.value = await GetServerData(
      selectedServer.value.url,
      selectedServer.value.api,
      command.value,
      jsonStr.value,
    )
  }
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    getServerinfo()
  }
}

const hiddenColorPicker = () => {
  const colorpicker = document.getElementById('ColorPickerSlider')
  if (colorpicker) {
    if (!colorpicker.classList.contains('hidden')) {
      colorpicker.classList.add('hidden')
    }
  }
}
</script>
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Edge */
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>