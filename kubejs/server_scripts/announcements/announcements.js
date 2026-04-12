let $TreeMap = Java.loadClass("java.util.TreeMap")
/** @type {import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Type} */
let $DefaultArtifactVersion = Java.loadClass("org.apache.maven.artifact.versioning.DefaultArtifactVersion")
/** @type {import("java.util.TreeMap").$TreeMap$$Type<(import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Original), (import("java.util.List").$List$$Type<(import("net.minecraft.network.chat.MutableComponent").$MutableComponent$$Original) >) >} */
let announcements = new $TreeMap()
/** @type {import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Original} */
let currentVersion = null
/** @type {import("java.util.List").$List<import("net.minecraft.network.chat.MutableComponent").$MutableComponent$$Original>} */
let permanentAnnouncements = Utils.newList()
// files related:
// kubejs/assets/atm/lang/en_us.json

// Add your announcements here
function initAnnouncements(){
  addAnnouncement("0.3.0-beta", Text.translatable("announcement.kubejs.v0_3_0_beta"))
  addAnnouncement("0.11.0-beta", Text.translatable("announcement.kubejs.v0_11_0_beta"))
  addAnnouncement("0.12.0-beta", Text.translatable("announcement.kubejs.v0_12_0_beta"))
  addAnnouncement("0.13.0-beta", Text.translatable("announcement.kubejs.v0_13_0_beta"))
  addAnnouncement("0.15.0-beta", Text.translatable("announcement.kubejs.v0_15_0_beta"))

  addPermanentAnnouncement(Text.translatable("announcement.kubejs.permanent.beta_warning"))
  addPermanentAnnouncement(Text.of("").append(Text.translatable("announcement.kubejs.permanent.issues")).append(Text.translatable("announcement.kubejs.permanent.github_issues").green().clickOpenUrl("https://github.com/AllTheMods/All-the-Mons/issues").hover(Text.translatable("mco.notification.visitUrl.buttonText.default"))))
  addPermanentAnnouncement(Text.of("").append(Text.translatable("announcement.kubejs.permanent.suggestions")).append(Text.translatable("announcement.kubejs.permanent.discussions").green().clickOpenUrl("https://github.com/AllTheMods/All-the-Mons/discussions").hover(Text.translatable("mco.notification.visitUrl.buttonText.default"))))
  addPermanentAnnouncement(Text.of("").append(Text.translatable("announcement.kubejs.permanent.support")).append(Text.translatable("announcement.kubejs.permanent.discord_support").green().clickOpenUrl("https://discord.gg/allthemods").hover(Text.translatable("mco.notification.visitUrl.buttonText.default"))))
  addPermanentAnnouncement(Text.of("").append(Text.translatable("announcement.kubejs.permanent.progress")).append(Text.translatable("announcement.kubejs.permanent.tracker").green().clickOpenUrl("https://github.com/AllTheMods/All-the-Mons/issues/37").hover(Text.translatable("mco.notification.visitUrl.buttonText.default"))))      

  // keep this at last line
  addAnnouncement(currentVersion.toString(), Text.translatable("announcement.kubejs.changelogs", Text.translatable("announcement.kubejs.here").green().clickOpenUrl("https://github.com/AllTheMods/All-the-Mons/blob/main/CHANGELOG.md").hover(Text.translatable("mco.notification.visitUrl.buttonText.default"))))
}

ServerEvents.loaded(event => {
  if (!Platform.isLoaded("bcc")) return
  announcements.clear()
  permanentAnnouncements.clear()
  /** @type {import("dev.wuffs.bcc.BetterCompatibilityChecker").$BetterCompatibilityChecker$$Original} */
  let $BccInstance = Java.loadClass("dev.wuffs.bcc.BetterCompatibilityChecker")
  currentVersion = new $DefaultArtifactVersion($BccInstance.betterStatus.version())
  initAnnouncements()
})

function addAnnouncement(/** @type {string} */version, /** @type {import("net.minecraft.network.chat.MutableComponent").$MutableComponent$$Original} */ component) {
  announcements.computeIfAbsent(new $DefaultArtifactVersion(version), (key) => Utils.newList()).addLast(typeof component == "string" ? Text.of(component) : component)
}

function addPermanentAnnouncement(/** @type {import("net.minecraft.network.chat.MutableComponent").$MutableComponent$$Original} */ component) {
  permanentAnnouncements.addLast(typeof component == "string" ? Text.of(component) : component)
}

PlayerEvents.loggedIn(event => {
  if (currentVersion == null) return
  let currentDismissed = event.player.persistentData.getString("LastDismissedAnnouncementVersion")
  if (currentDismissed == null) {
    currentDismissed = new $DefaultArtifactVersion("0.0.0")
  } else {
    currentDismissed = new $DefaultArtifactVersion(currentDismissed)
  }
  let ableToDismiss = false
  let printHeader = true
  announcements.forEach((key, listComponents) => {
    if (currentDismissed.compareTo(key) < 0 && currentVersion.compareTo(key) >= 0) {
      ableToDismiss = true
      if (printHeader) {
        event.player.tell(Text.translatable("announcement.kubejs.header", Text.translatable("announcement.kubejs.title")))
        printHeader = false
      }
      for (let component of listComponents) {
        let message = Text.translatable("[%s] - %s", Text.of(key.toString()).gold(), component)
        event.player.tell(message)
      }            
    }
  })
  
  permanentAnnouncements.forEach(component => {
      if (printHeader) {
        event.player.tell(Text.translatable("announcement.kubejs.header", Text.translatable("announcement.kubejs.title")))
        printHeader = false
      }
      let message = Text.translatable(" - %s", component)
      event.player.tell(message)
  })

  if (ableToDismiss) {
    let message = Text.translatable("announcements.atm.dismiss_up_to_version", Text.blue(currentVersion.toString()))
      .green()
      .hover(Text.translatable("kubejs.atm.click_here"))
      .clickRunCommand("/dismiss_announcements")
        
    event.player.tell(message)
  }
})

ServerEvents.basicPublicCommand("dismiss_announcements", event => {
  let player = event.player
  if (player == null) {
    event.cancel("Player was not found!")
  } else {
    let pData = player.getPersistentData()
    if (event.input == "clear") {
      pData.putString("LastDismissedAnnouncementVersion", "0.0.0")
      event.respond(Text.yellow("Cleared dismissed version!"))
    } else {
      if (currentVersion == null) {
        event.cancel("Current version of the modpack is null, is BetterCompatibilityCheck installed?")
      } else {
        pData.putString("LastDismissedAnnouncementVersion", currentVersion.toString())
        event.respond(Text.translatable("announcements.atm.dismissed_up_to_version", currentVersion.toString()).yellow())
      }
    }
  }
})